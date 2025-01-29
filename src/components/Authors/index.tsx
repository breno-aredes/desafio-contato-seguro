import { useState } from "react";
import * as S from "./styles";
import { CiCircleAlert } from "react-icons/ci";
import { AuthorFormValues } from "../../types/authors";
import Button from "../Buttons";
import { ButtonContent } from "../../styles/index";
import { BsPlusLg } from "react-icons/bs";
import Modal from "../Modal";
import AuthorsModalContent from "../ModalContent/Authors";
import { SubmitHandler } from "react-hook-form";
import { useAuthors } from "../../hooks/AuthorsContext";

const Authors = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { authors, addAuthor } = useAuthors();

  const handleAddAuthor: SubmitHandler<AuthorFormValues> = (data) => {
    addAuthor(data);
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
