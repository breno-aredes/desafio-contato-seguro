import React, { useState } from "react";
import * as S from "./styles";
import { CiCircleAlert } from "react-icons/ci";
import { AuthorsProps } from "../../types/authors";
import Button from "../Buttons";

import { BsPlusLg } from "react-icons/bs";
import Modal from "../Modal";

const Authors: React.FC<AuthorsProps> = ({ authors }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
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
        <Button onClick={() => setModalOpen(true)}>
          <BsPlusLg />
          Adicionar autor
        </Button>
      </S.ButtonContent>

      <Modal isModalOpen={modalOpen}>
        <Button onClick={() => setModalOpen(false)}>sair</Button>
      </Modal>
    </>
  );
};

export default Authors;
