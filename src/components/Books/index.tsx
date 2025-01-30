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
import { BookFormValues } from "../../types/Books";
import { useBooks } from "../../hooks/BooksContext";
import { FaRegEye, FaRegTrashAlt } from "react-icons/fa";

const Books = () => {
  const { books, addBook } = useBooks();
  const [createModalIsOpen, setCreateModalIsOpen] = useState<boolean>(false);

  const handleAddBook: SubmitHandler<BookFormValues> = (data) => {
    setCreateModalIsOpen(false);
    addBook(data);
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
                      <Button size="sm">
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
    </>
  );
};

export default Books;
