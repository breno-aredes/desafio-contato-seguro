import React, { useState } from "react";
import * as S from "./styles";
import { CiCircleAlert } from "react-icons/ci";
import { AuthorsProps } from "../../types/authors";
import Button from "../Buttons";
import { ButtonContent } from "../../styles/index";

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
      <ButtonContent>
        <Button onClick={() => setModalOpen(true)}>
          <BsPlusLg />
          Adicionar autor
        </Button>
      </ButtonContent>

      <Modal isModalOpen={modalOpen}>
        <ButtonContent>
          <Button onClick={() => setModalOpen(false)}>Sair</Button>
          <Button onClick={() => setModalOpen(false)}>Cadastrar</Button>
        </ButtonContent>
      </Modal>
    </>
  );
};

export default Authors;
