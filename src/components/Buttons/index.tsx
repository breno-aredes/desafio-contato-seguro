import { ButtonProps } from "../../types/Button";
import { StyledButton } from "./styles";

const Button = ({
  children,
  color = "blue",
  size = "md",
  ...props
}: ButtonProps) => {
  return (
    <StyledButton color={color} size={size} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
