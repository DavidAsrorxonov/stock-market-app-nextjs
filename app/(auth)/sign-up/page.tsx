"use client";

import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import { Button } from "@/components/ui/button";
import { INVESTMENT_GOALS } from "@/lib/constants/investmentGoals";
import React from "react";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
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
        <InputField
          name="fullName"
          label="Full Name"
          placeholder="John Doe"
          register={register}
          error={errors.fullName}
          validation={{ required: "Full name is required", minLength: 2 }}
        />
        <InputField
          name="email"
          label="Email"
          placeholder="johndoe@gmail.com"
          register={register}
          error={errors.email}
          validation={{ required: "Email is required", pattern: /^\S+@\S+$/i }}
        />
        <InputField
          name="password"
          label="Password"
          placeholder={"Enter your password"}
          type="password"
          register={register}
          error={errors.password}
          validation={{ required: "Password is required", minLength: 8 }}
        />

        <SelectField
          name="investmentGoals"
          label="Your Investment Goals"
          placeholder="Select your Investment Goal"
          options={INVESTMENT_GOALS}
          control={control}
          error={errors.investmentGoals}
        />

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
