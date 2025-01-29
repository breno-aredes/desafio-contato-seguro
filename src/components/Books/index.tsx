import * as S from "./styles";
import { CiCircleAlert } from "react-icons/ci";
import Button from "../Buttons";
import { BsPlusLg } from "react-icons/bs";
import { ButtonContent } from "../../styles/index";
import { useState } from "react";

const Books = () => {
  const [books, setBooks] = useState<string[]>([]);

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
        <Button>
          <BsPlusLg />
          Adicionar livro
        </Button>
      </ButtonContent>
    </>
  );
};

export default Books;
