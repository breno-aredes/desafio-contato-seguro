import { ButtonHTMLAttributes } from "react";

export type Colors = "blue" | "disabled" | "transparent";

export type Sizes = "sm" | "md";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Colors;
  size?: Sizes;
  children?: React.ReactNode;
}

export type StyledButtonProps = {
  color: Colors;
  size: Sizes;
};
