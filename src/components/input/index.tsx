import { forwardRef } from "react";
import { Container, InputContainer } from "./styles";
import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  field: string;
  error?: FieldError;
  register: UseFormRegister<Record<string, unknown>>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, field, register, error, ...props }: InputProps, ref) => {
    return (
      <Container>
        {label && <label htmlFor={props.id}>{label}</label>}
        <InputContainer>
          <input id={props.id} {...props} {...register(field)} ref={ref} />
        </InputContainer>
        {error && <p>{error.message}</p>}
      </Container>
    );
  }
);

Input.displayName = "Input";

export default Input;
