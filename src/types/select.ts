import { ChangeEvent } from "react";

export interface SelesctProps {
  children?: React.ReactNode;
  label: string;
  value: any;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  signUp?: boolean;
  width?: string;
}
