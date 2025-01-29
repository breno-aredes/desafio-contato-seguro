import { useState } from "react";
import * as S from "./styles";
import { CiCircleAlert } from "react-icons/ci";
import { AuthorFormValues, AuthorValues } from "../../types/authors";
import Button from "../Buttons";
import { ButtonContent } from "../../styles/index";
import { BsPlusLg } from "react-icons/bs";
import Modal from "../Modal";
import AuthorsModalContent from "../ModalContent/Authors";
import { SubmitHandler } from "react-hook-form";

const Authors = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [authors, setAuthors] = useState<AuthorValues[]>([]);

  const handleAddAuthor: SubmitHandler<AuthorFormValues> = (data) => {
    const newAuthor = { ...data, id: Date.now() };
    setAuthors([...authors, newAuthor]);
    setModalOpen(false);
  };

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
        <AuthorsModalContent
          onSubmit={handleAddAuthor}
          onClose={() => setModalOpen(false)}
        />
      </Modal>
    </>
  );
};

export default Authors;
