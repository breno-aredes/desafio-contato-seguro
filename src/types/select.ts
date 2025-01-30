import { ChangeEvent } from "react";
import { FieldError } from "react-hook-form";

export interface SelesctProps {
  children?: React.ReactNode;
  label: string;
  value: any;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  error?: FieldError;
}
