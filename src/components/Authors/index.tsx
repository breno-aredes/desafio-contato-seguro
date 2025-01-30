import { useState } from "react";
import * as S from "./styles";
import { CiCircleAlert } from "react-icons/ci";
import { AuthorFormValues, AuthorValues } from "../../types/authors";
import Button from "../Buttons";
import * as ES from "../../styles/index";
import { BsPlusLg } from "react-icons/bs";
import Modal from "../Modal";
import AuthorsModalContent from "../ModalContent/Authors/Create";
import { SubmitHandler } from "react-hook-form";
import { useAuthors } from "../../hooks/AuthorsContext";
import { FaRegEye, FaRegTrashAlt } from "react-icons/fa";
import DeleteItem from "../ModalContent/SimpleContent";
import { useBooks } from "../../hooks/BooksContext";
import ViewAuthorsModalContent from "../ModalContent/Authors/View";
import { BookValues } from "../../types/Books";

const Authors = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [viewModalOpen, setViewModalOpen] = useState<boolean>(false);
  const [DeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [author, setAutor] = useState<AuthorValues | null>(null);
  const { authors, addAuthor, removeAuthor } = useAuthors();
  const [authorBooks, setAuthorBooks] = useState<BookValues[] | null>(null);
  const { removeBooksByAuthor, books } = useBooks();

  const handleAddAuthor: SubmitHandler<AuthorFormValues> = (data) => {
    addAuthor(data);
    setModalOpen(false);
  };

  const handleViewAuthor = (data: AuthorValues) => {
    setAutor(data);
    const filteredBooks = books.filter((book) => book.author_id === data.id);
    setAuthorBooks(filteredBooks);
    setViewModalOpen(true);
  };

  const handleOpenDeleteAuthor = (data: AuthorValues) => {
    setAutor(data);
    setDeleteModalOpen(true);
  };

  const handleDeleteAuthor = () => {
    if (author) {
      removeAuthor(author.id);
      removeBooksByAuthor(author.id);
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
            <ES.Table>
              <thead>
                <tr>
                  <ES.TableHeader>Index</ES.TableHeader>
                  <ES.TableHeader>Nome do Autor</ES.TableHeader>
                  <ES.TableHeader>Ação</ES.TableHeader>
                </tr>
              </thead>
              <tbody>
                {authors.map((author, index) => (
                  <ES.TableRow key={author.id}>
                    <ES.TableCell>{index + 1}</ES.TableCell>
                    <ES.TableCell>{author.name}</ES.TableCell>
                    <ES.TableCell>
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
                    </ES.TableCell>
                  </ES.TableRow>
                ))}
              </tbody>
            </ES.Table>
          </>
        )}
      </S.AuthorSection>
      <ES.ButtonContent>
        <Button onClick={() => setModalOpen(true)}>
          <BsPlusLg />
          Adicionar autor
        </Button>
      </ES.ButtonContent>

      <Modal isModalOpen={modalOpen}>
        <AuthorsModalContent
          onSubmit={handleAddAuthor}
          onClose={() => setModalOpen(false)}
        />
      </Modal>

      <Modal isModalOpen={viewModalOpen}>
        <ViewAuthorsModalContent
          onClose={() => setViewModalOpen(false)}
          author={author}
          authorBooks={authorBooks}
        />
      </Modal>

      <Modal isModalOpen={DeleteModalOpen}>
        <DeleteItem
          setCancel={setDeleteModalOpen}
          nextStep={handleDeleteAuthor}
          type="autor"
        />
      </Modal>
    </>
  );
};

export default Authors;
