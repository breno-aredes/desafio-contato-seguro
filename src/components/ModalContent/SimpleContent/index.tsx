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
        <p>
          Você precisa criar um <span>autor</span> antes de criar um{" "}
          <span>livro</span>
        </p>
      ) : (
        <p>
          Tem certeza que deseja deletar este <span>{type}</span>?
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
