import { FieldError, RegisterOptions, UseFormRegister } from "react-hook-form";

export interface FormInputProps {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  validation?: RegisterOptions;
  disabled?: boolean;
  value?: string;
}
