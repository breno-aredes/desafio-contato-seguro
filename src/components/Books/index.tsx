import * as S from "./styles";
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
            <S.Table>
              <thead>
                <tr>
                  <S.TableHeader>Index</S.TableHeader>
                  <S.TableHeader>Nome do Livro</S.TableHeader>
                  <S.TableHeader>Ação</S.TableHeader>
                </tr>
              </thead>
              <tbody>
                {books.map((book, index) => (
                  <S.TableRow key={book.id}>
                    <S.TableCell>{index + 1}</S.TableCell>
                    <S.TableCell>{book.name}</S.TableCell>
                    <S.TableCell>
                      <Button size="sm" color="transparent">
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
