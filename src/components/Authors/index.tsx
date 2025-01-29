import React from "react";
import * as S from "./styles";
import { CiCircleAlert } from "react-icons/ci";
import { AuthorsProps } from "../../types/authors";
import Button from "../Buttons";

import { BsPlusLg } from "react-icons/bs";

const Authors: React.FC<AuthorsProps> = ({ authors }) => {
  return (
    <>
      <S.AuthorSection>
        {authors.length === 0 ? (
          <S.NoAuthors>
            <CiCircleAlert />
            Nenhum autor cadastrado
          </S.NoAuthors>
        ) : (
          <></>
        )}
      </S.AuthorSection>
      <S.ButtonContent>
        <Button>
          <BsPlusLg />
          Adicionar autor
        </Button>
      </S.ButtonContent>
    </>
  );
};

export default Authors;
