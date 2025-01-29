import { useState } from "react";
import * as S from "./styles";
import { CiCircleAlert } from "react-icons/ci";
import { AuthorFormValues, AuthorValues } from "../../types/authors";
import Button from "../Buttons";
import { ButtonContent } from "../../styles/index";
import { BsPlusLg } from "react-icons/bs";
import Modal from "../Modal";
import AuthorsModalContent from "../ModalContent/Authors/Create";
import { SubmitHandler } from "react-hook-form";
import { useAuthors } from "../../hooks/AuthorsContext";
import { FaRegEye, FaRegTrashAlt } from "react-icons/fa";
import DeleteItem from "../ModalContent/DeleteItem";

const Authors = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [viewModalOpen, setViewModalOpen] = useState<boolean>(false);
  const [DeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [author, setAutor] = useState<AuthorValues | null>(null);
  const { authors, addAuthor, removeAuthor } = useAuthors();

  const handleAddAuthor: SubmitHandler<AuthorFormValues> = (data) => {
    addAuthor(data);
    setModalOpen(false);
  };

  const handleViewAuthor = (data: AuthorValues) => {
    setAutor(data);
    setViewModalOpen(true);
  };

  const handleOpenDeleteAuthor = (data: AuthorValues) => {
    setAutor(data);
    setDeleteModalOpen(true);
  };

  const handleDeleteAuthor = () => {
    if (author) {
      removeAuthor(author.id);
      setDeleteModalOpen(false);
    }
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
          <>
            <S.Table>
              <thead>
                <tr>
                  <S.TableHeader>Index</S.TableHeader>
                  <S.TableHeader>Nome do Autor</S.TableHeader>
                  <S.TableHeader>Ação</S.TableHeader>
                </tr>
              </thead>
              <tbody>
                {authors.map((author, index) => (
                  <S.TableRow key={author.id}>
                    <S.TableCell>{index + 1}</S.TableCell>
                    <S.TableCell>{author.name}</S.TableCell>
                    <S.TableCell>
                      <Button
                        size="sm"
                        color="transparent"
                        onClick={() => handleViewAuthor(author)}
                      >
                        <FaRegEye />
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => handleOpenDeleteAuthor(author)}
                      >
                        <FaRegTrashAlt />
                      </Button>
                    </S.TableCell>
                  </S.TableRow>
                ))}
              </tbody>
            </S.Table>
          </>
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

      <Modal isModalOpen={viewModalOpen}>
        <Button onClick={() => setViewModalOpen(false)}></Button>
      </Modal>

      <Modal isModalOpen={DeleteModalOpen}>
        <DeleteItem
          setCancel={setDeleteModalOpen}
          nextStep={handleDeleteAuthor}
          deleteType="autor"
        />
      </Modal>
    </>
  );
};

export default Authors;
