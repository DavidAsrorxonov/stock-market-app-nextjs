"use server";

import { ReturnType } from "@/types/sendEmailFunctionReturn";
import { auth } from "../better-auth/auth";
import { inngest } from "../inngest/client";
import { headers } from "next/headers";

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

export const signOut = async (): Promise<ReturnType> => {
  try {
    await auth.api.signOut({
      headers: await headers(),
    });

    return {
      success: true,
      message: "Sign out successful",
    };
  } catch (error) {
    console.log("Sign out failed", error);
    return {
      success: false,
      message: "Sign out failed",
    };
  }
};

export const signInWithEmail = async ({
  email,
  password,
}: SignInFormData): Promise<ReturnType> => {
  try {
    const response = await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });

    return {
      success: true,
      message: "Sign in successful",
      data: response,
    };
  } catch (error) {
    console.log("Sign in failed", error);
    return {
      success: false,
      message: "Sign in failed",
    };
  }
};
