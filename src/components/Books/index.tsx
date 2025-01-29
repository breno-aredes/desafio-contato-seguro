import React from "react";
import * as S from "./styles";
import { CiCircleAlert } from "react-icons/ci";
import { BooksProps } from "../../types/Books";
import Button from "../Buttons";
import { BsPlusLg } from "react-icons/bs";
import { ButtonContent } from "../../styles/index";

const Books: React.FC<BooksProps> = ({ books }) => {
  return (
    <>
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

      <ButtonContent>
        <Button>
          <BsPlusLg />
          Adicionar livro
        </Button>
      </ButtonContent>
    </>
  );
};

export default Books;
