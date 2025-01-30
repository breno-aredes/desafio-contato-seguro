import { forwardRef } from "react";
import { Container, InputContainer } from "./styles";
import { InputProps } from "../../types/input";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, field, register, error, ...props }: InputProps, ref) => {
    return (
      <Container>
        {label && <label htmlFor={props.id || field}>{label}</label>}
        <InputContainer>
          <input
            {...props}
            {...(!!register && register(field as string))}
            ref={ref}
          />
        </InputContainer>
        {error && <p>{error.message}</p>}
      </Container>
    );
  }
);

Input.displayName = "Input";

export default Input;
