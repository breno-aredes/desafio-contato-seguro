import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ButtonContent } from "../../../styles/index";
import Button from "../../Buttons";
import Input from "../../input";
import { authorSchema } from "../../../schemas/Authors";
import {
  AuthorFormValues,
  AuthorsModalContentProps,
} from "../../../types/authors";
import { Title } from "./styles";

const AuthorsModalContent: React.FC<AuthorsModalContentProps> = ({
  onSubmit,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthorFormValues>({
    resolver: yupResolver(authorSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Title>Adicionar Autor</Title>
      <Input
        label="Nome"
        field="name"
        {...register("name")}
        error={errors.name}
      />
      <Input
        label="Email"
        field="email"
        {...register("email")}
        error={errors.email}
      />
      <ButtonContent>
        <Button type="button" onClick={onClose}>
          Sair
        </Button>
        <Button type="submit">Cadastrar</Button>
      </ButtonContent>
    </form>
  );
};

export default AuthorsModalContent;
