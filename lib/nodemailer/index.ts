import { WelcomeEmailData } from "@/types/welcomeEmail";
import nodemailer from "nodemailer";
import { WELCOME_EMAIL_TEMPLATE } from "./templates";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAIL_APP_PASSWORD,
  },
});

export const sendWelcomeEmail = async ({
  email,
  name,
  intro,
}: WelcomeEmailData) => {
  const htmlTemplate = WELCOME_EMAIL_TEMPLATE.replace("{{name}}", name).replace(
    "{{intro}}",
    intro
  );

  const mailOptions = {
    from: "Signalist - Stock Market Alerts",
    to: email,
    subject: `Welcome to Signalist - your stock market toolkit is ready`,
    text: "Thanks for joining Signalist! We're excited to have you aboard. Let's explore the world of stocks together!",
    html: htmlTemplate,
  };

  await transporter.sendMail(mailOptions);
};
