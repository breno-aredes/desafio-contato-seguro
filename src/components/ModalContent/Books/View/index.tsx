import React from "react";
import { ButtonContent } from "../../../../styles/index";
import Button from "../../../Buttons";

import * as S from "./styles";
import { ViewBookModalContentProps } from "../../../../types/Books";

const ViewBookModalContent: React.FC<ViewBookModalContentProps> = ({
  onClose,
  book,
  author,
}) => {
  return (
    <S.ViewBody>
      <S.Title>Dados Livro</S.Title>

      <S.BookData>
        <div>
          <h2>Nome:</h2>
          <h3>{book?.name}</h3>
        </div>
        <div>
          <h2>Páginas:</h2>
          <h3>{book?.pages || "Não informado"}</h3>
        </div>

        <div>
          <h2>Nome do autor:</h2>
          <h3>{author?.name}</h3>
        </div>
      </S.BookData>

      <ButtonContent>
        <Button type="button" onClick={onClose}>
          Sair
        </Button>
      </ButtonContent>
    </S.ViewBody>
  );
};

export default ViewBookModalContent;
