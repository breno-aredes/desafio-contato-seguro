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

const Books = () => {
  const [books, setBooks] = useState<string[]>([]);
  const [createModalIsOpen, setCreateModalIsOpen] = useState<boolean>(false);

  const handleAddBook: SubmitHandler<BookFormValues> = (data) => {
    setCreateModalIsOpen(false);
    console.log(data);
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
          <></>
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
