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
import DeleteItem from "../ModalContent/DeleteItem";

const Books = () => {
  const { books, addBook, removeBook } = useBooks();
  const [createModalIsOpen, setCreateModalIsOpen] = useState<boolean>(false);
  const [book, setBook] = useState<BookValues | null>(null);
  const [DeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

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
                      <Button size="sm" color="transparent">
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
        <Button onClick={() => setCreateModalIsOpen(true)}>
          <BsPlusLg />
          Adicionar livro
        </Button>
      </ButtonContent>

      <Modal isModalOpen={createModalIsOpen}>
        <BooksModalContent
          onSubmit={handleAddBook}
          onClose={() => setCreateModalIsOpen(false)}
        ></BooksModalContent>
      </Modal>

      <Modal isModalOpen={DeleteModalOpen}>
        <DeleteItem
          setCancel={setDeleteModalOpen}
          nextStep={handleDeleteBook}
          deleteType="livro"
        />
      </Modal>
    </>
  );
};

export default Books;
