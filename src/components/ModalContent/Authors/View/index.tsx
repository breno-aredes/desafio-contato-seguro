import React from "react";
import { ButtonContent } from "../../../../styles/index";
import Button from "../../../Buttons";
import { ViewAuthorsModalContentProps } from "../../../../types/authors";
import * as S from "./styles";

const ViewAuthorsModalContent: React.FC<ViewAuthorsModalContentProps> = ({
  onClose,
  author,
  authorBooks,
}) => {
  return (
    <S.ViewBody>
      <S.Title>Dados Autor</S.Title>

      <S.AuthorData>
        <div>
          <h2>Nome:</h2>
          <h3>{author?.name}</h3>
        </div>
        <div>
          <h2>Email:</h2>
          <h3>{author?.email || "Desconhecido"}</h3>
        </div>
      </S.AuthorData>

      <div>
        <h2>Livros:</h2>
        {authorBooks && authorBooks.length > 0 ? (
          authorBooks.map((book) => (
            <div key={book.id}>
              <h3>{book.name}</h3>
            </div>
          ))
        ) : (
          <h3>Esse autor ainda não possui livros cadastrados.</h3>
        )}
      </div>

      <ButtonContent>
        <Button type="button" onClick={onClose}>
          Sair
        </Button>
      </ButtonContent>
    </S.ViewBody>
  );
};

export default ViewAuthorsModalContent;
