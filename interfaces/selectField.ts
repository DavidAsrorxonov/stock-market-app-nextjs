import { Control, FieldError } from "react-hook-form";

interface Option {
  value: string;
  label: string;
}

export interface SelectFieldProps {
  name: string;
  label: string;
  placeholder: string;
  options: readonly Option[];
  control: Control<any>;
  error?: FieldError;
  required?: boolean;
}
