import * as S from "./styles";
import * as ES from "../../styles/index";
import { CiCircleAlert } from "react-icons/ci";
import Button from "../Buttons";
import { BsPlusLg } from "react-icons/bs";
import { ButtonContent } from "../../styles/index";
import { useState } from "react";
import Modal from "../Modal";
import BooksModalContent from "../ModalContent/Books/Create";
import { SubmitHandler } from "react-hook-form";
import { BookFormValues, BookValues } from "../../types/Books";
import { useBooks } from "../../hooks/BooksContext";
import { FaRegEye, FaRegTrashAlt } from "react-icons/fa";
import DeleteItem from "../ModalContent/SimpleContent";
import { useAuthors } from "../../hooks/AuthorsContext";
import { AuthorValues } from "../../types/authors";
import ViewBookModalContent from "../ModalContent/Books/View";

const Books = () => {
  const { books, addBook, removeBook } = useBooks();
  const [createModalIsOpen, setCreateModalIsOpen] = useState<boolean>(false);
  const [book, setBook] = useState<BookValues | null>(null);
  const [DeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);
  const { authors } = useAuthors();
  const [author, setAuthor] = useState<AuthorValues | null>(null);
  const [viewModalOpen, setViewModalOpen] = useState<boolean>(false);

  const handleAddBook: SubmitHandler<BookFormValues> = (data) => {
    setCreateModalIsOpen(false);
    addBook(data);
  };

  const handleOpenDeleteBook = (data: BookValues) => {
    setBook(data);
    setDeleteModalOpen(true);
  };

  const handleDeleteBook = () => {
    if (book) {
      removeBook(book.id);
      setDeleteModalOpen(false);
    }
  };

  const handleViewBook = (data: BookValues) => {
    setBook(data);
    const filteredAuthor =
      authors.find((author) => author.id === data.author_id) || null;
    setAuthor(filteredAuthor);
    setViewModalOpen(true);
  };

  return (
    <>
      <S.BookSection>
        {books.length === 0 ? (
          <S.NoBooks>
            <CiCircleAlert />
            Nenhum livro cadastrado
          </S.NoBooks>
        ) : (
          <>
            <ES.Table>
              <thead>
                <tr>
                  <ES.TableHeader>Index</ES.TableHeader>
                  <ES.TableHeader>Nome do Livro</ES.TableHeader>
                  <ES.TableHeader>Ação</ES.TableHeader>
                </tr>
              </thead>
              <tbody>
                {books.map((book, index) => (
                  <ES.TableRow key={book.id}>
                    <ES.TableCell>{index + 1}</ES.TableCell>
                    <ES.TableCell>{book.name}</ES.TableCell>
                    <ES.TableCell>
                      <Button
                        size="sm"
                        color="transparent"
                        onClick={() => handleViewBook(book)}
                      >
                        <FaRegEye />
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => handleOpenDeleteBook(book)}
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
      </S.BookSection>

      <ButtonContent>
        <Button
          onClick={() =>
            authors.length === 0 ? setAlert(true) : setCreateModalIsOpen(true)
          }
        >
          <BsPlusLg />
          Adicionar livro
        </Button>
      </ButtonContent>

      <Modal isModalOpen={createModalIsOpen}>
        <BooksModalContent
          onSubmit={handleAddBook}
          onClose={() => setCreateModalIsOpen(false)}
        />
      </Modal>

      <Modal isModalOpen={DeleteModalOpen}>
        <DeleteItem
          setCancel={setDeleteModalOpen}
          nextStep={handleDeleteBook}
          type="livro"
        />
      </Modal>

      <Modal isModalOpen={DeleteModalOpen}>
        <DeleteItem
          setCancel={setDeleteModalOpen}
          nextStep={handleDeleteBook}
          type="livro"
        />
      </Modal>

      <Modal isModalOpen={alert}>
        <DeleteItem setCancel={setAlert} type="alert" />
      </Modal>

      <Modal isModalOpen={viewModalOpen}>
        <ViewBookModalContent
          onClose={() => setViewModalOpen(false)}
          author={author}
          book={book}
        />
      </Modal>
    </>
  );
};

export default Books;
