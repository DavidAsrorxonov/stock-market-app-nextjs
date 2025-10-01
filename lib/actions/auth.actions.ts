"use server";

import { ReturnType } from "@/types/sendEmailFunctionReturn";
import { auth } from "../better-auth/auth";
import { inngest } from "../inngest/client";

export const signUpWithEmail = async ({
  email,
  password,
  fullName,
  country,
  investmentGoals,
  riskTolerance,
  preferredIndustry,
}: SignUpFormData): Promise<ReturnType> => {
  try {
    const response = await auth.api.signUpEmail({
      body: {
        email,
        password,
        name: fullName,
      },
    });

    if (response) {
      await inngest.send({
        name: "app/user.created",
        data: {
          email,
          name: fullName,
          country,
          investmentGoals,
          riskTolerance,
          preferredIndustry,
        },
      });
    }
    //
    return {
      success: true,
      message: "Sign up successful",
    };
  } catch (error) {
    console.log("Sign up failed", error);
    return {
      success: false,
      message: "Sign up failed",
    };
  }
};
