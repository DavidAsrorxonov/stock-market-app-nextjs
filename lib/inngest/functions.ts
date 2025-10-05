import { ReturnType } from "@/types/sendEmailFunctionReturn";
import { inngest } from "./client";
import { PERSONALIZED_WELCOME_EMAIL_PROMPT } from "./prompts";
import { sendWelcomeEmail } from "../nodemailer";

export const sendSignUpEmail = inngest.createFunction(
  {
    id: "sign-up-email",
  },
  { event: "app/user.created" },
  async ({ event, step }): Promise<ReturnType> => {
    const userProfile = `
        - Country: ${event.data.country}
        - Investment Goals: ${event.data.investmentGoals}
        - Risk Tolerance: ${event.data.riskTolerance}
        - Preferred Industry: ${event.data.preferredIndustry}
    `;

    const prompt = PERSONALIZED_WELCOME_EMAIL_PROMPT.replace(
      "{{userProfile}}",
      userProfile
    );

    const response = await step.ai.infer("generate-welcome-intro", {
      model: step.ai.models.gemini({ model: "gemini-2.5-flash" }),
      body: {
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }],
          },
        ],
      },
    });

    await step.run("send-welcome-email", async () => {
      const part = response.candidates?.[0].content?.parts?.[0];

      const introText =
        (part && "text" in part ? part.text : null) ||
        "Thanks for jioing Signalist! You now have the tools to track markets and make smarter moves.";

      const {
        data: { email, name },
      } = event;
      return await sendWelcomeEmail({
        email,
        name,
        intro: introText,
      });
    });

    return {
      success: true,
      message: "Welcome email sent successfully",
    };
  }
);

export const sendDailyNewsSummary = inngest.createFunction(
  {
    id: "daily-news-summary",
  },
  [
    {
      event: "app/send.daily.news",
    },
    {
      // Send daily news summary at 12:00 PM UTC every day
      // The cron schedule is in the format of "minute hour day month day_of_week"
      // In this case, it means the function will be triggered at the 0th minute of the 12th hour of every day
      cron: "0 12 * * *",
    },
  ],
  async ({ step }) => {}
);
