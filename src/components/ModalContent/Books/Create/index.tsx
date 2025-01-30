import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ButtonContent } from "../../../../styles/index";
import Button from "../../../Buttons";
import Input from "../../../input";
import { Title } from "./styles";
import Select from "../../../Select";
import { useAuthors } from "../../../../hooks/AuthorsContext";
import { BookFormValues, BookModalContentProps } from "../../../../types/Books";
import { BookSchema } from "../../../../schemas/Books";

const BooksModalContent: React.FC<BookModalContentProps> = ({
  onSubmit,
  onClose,
}) => {
  const { authors } = useAuthors();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<BookFormValues>({
    resolver: yupResolver(BookSchema),
  });

  const [selectedAuthor, setSelectedAuthor] = useState("");

  const handleSelectChange = (value: string) => {
    setSelectedAuthor(value);
    setValue("author_id", Number(value));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Title>Adicionar Livro</Title>
      <Input
        label="Nome"
        field="name"
        {...register("name")}
        error={errors.name}
      />
      <div style={{ height: "95px" }}>
        <Select
          label="Autor"
          {...register("author_id")}
          value={selectedAuthor}
          onChange={(event) => handleSelectChange(event.target.value)}
          error={errors.author_id}
        >
          <option
            data-default
            disabled
            value=""
            style={{ display: "none", color: "lightgray" }}
          >
            Selecione um autor...
          </option>
          {authors &&
            authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
        </Select>
      </div>

      <Input
        label="Páginas"
        field="pages"
        {...register("pages")}
        error={errors.pages}
      />

      <ButtonContent spaceBetween>
        <Button type="button" color="transparent" onClick={onClose}>
          Sair
        </Button>
        <Button type="submit">Cadastrar</Button>
      </ButtonContent>
    </form>
  );
};

export default BooksModalContent;
