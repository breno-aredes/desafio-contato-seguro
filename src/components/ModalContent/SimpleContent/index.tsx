import Button from "../../Buttons";
import { ButtonContent } from "../../../styles/index";
import * as S from "./styles";
import { CiCircleAlert } from "react-icons/ci";
import { SimpleContentProps } from "../../../types/modalContent";

const SimpleContent = ({ nextStep, setCancel, type }: SimpleContentProps) => {
  return (
    <S.DeleteContent>
      <CiCircleAlert />
      {type === "alert" ? (
        <h3>
          Você precisa criar um <span>autor</span> antes de criar um{" "}
          <span>livro</span>
        </h3>
      ) : (
        <h3>
          Tem certeza que deseja deletar este <span>{type}</span>?
        </h3>
      )}
      {type === "autor" && (
        <p>
          Ao deletar este autor, todos os livros vinculados a ele também serão
          excluídos.
        </p>
      )}

      <ButtonContent spaceBetween={type !== "alert"}>
        <Button
          type="button"
          color="transparent"
          onClick={() => setCancel(false)}
        >
          {type !== "alert" ? "Cancelar" : "Ok"}
        </Button>
        {type !== "alert" && nextStep && (
          <Button type="submit" onClick={nextStep}>
            sim
          </Button>
        )}
      </ButtonContent>
    </S.DeleteContent>
  );
};

export default SimpleContent;
