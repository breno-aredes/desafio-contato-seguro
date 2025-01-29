import React from "react";
import * as S from "./styles";
import { CiCircleAlert } from "react-icons/ci";

interface AuthorsProps {
  authors: string[];
}

const Authors: React.FC<AuthorsProps> = ({ authors }) => {
  return (
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
  );
};

export default Authors;
