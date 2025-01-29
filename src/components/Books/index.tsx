import React from "react";
import * as S from "./styles";
import { CiCircleAlert } from "react-icons/ci";
import { BooksProps } from "../../types/Books";

const Books: React.FC<BooksProps> = ({ books }) => {
  return (
    <S.BookSection>
      {books.length === 0 ? (
        <S.NoBooks>
          <CiCircleAlert />
          Nenhum livro cadastrado
        </S.NoBooks>
      ) : (
        <></>
      )}
    </S.BookSection>
  );
};

export default Books;
