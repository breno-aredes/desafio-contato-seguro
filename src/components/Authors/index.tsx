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
import { FaRegEye, FaRegTrashAlt } from "react-icons/fa";

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
                      <Button size="sm">
                        <FaRegEye />
                      </Button>
                      <Button size="sm">
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
    </>
  );
};

export default Authors;
