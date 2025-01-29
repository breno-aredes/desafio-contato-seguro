import { Dispatch, SetStateAction } from "react";
import Button from "../../Buttons";
import { ButtonContent } from "../../../styles/index";
import * as S from "./styles";

interface DeleteItemProps {
  nextStep: () => void;
  setCancel: Dispatch<SetStateAction<boolean>>;
  deleteType: string;
}

const DeleteItem = ({ nextStep, setCancel, deleteType }: DeleteItemProps) => {
  return (
    <S.DeleteContent>
      <p>Deseja realmente deletar este {deleteType}?</p>
      <ButtonContent>
        <Button
          type="button"
          color="transparent"
          onClick={() => setCancel(false)}
        >
          Sair
        </Button>
        <Button type="submit" onClick={nextStep}>
          Cadastrar
        </Button>
      </ButtonContent>
    </S.DeleteContent>
  );
};

export default DeleteItem;
