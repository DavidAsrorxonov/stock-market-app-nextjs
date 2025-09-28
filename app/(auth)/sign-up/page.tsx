"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "US",
      investmentGoals: "Growth",
      riskTolerance: "Medium",
      preferredIndustry: "Technology",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 className="form-title">Sign Up & Personalize</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting
            ? "Creating account..."
            : "Start your investment journey"}
        </Button>
      </form>
    </>
  );
};

export default SignUpPage;
