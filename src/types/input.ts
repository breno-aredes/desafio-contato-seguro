import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  field?: string;
  error?: FieldError;
  register?: UseFormRegister<Record<string, unknown>>;
}
