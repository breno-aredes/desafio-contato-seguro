import Button from "../../Buttons";
import { ButtonContent } from "../../../styles/index";
import * as S from "./styles";
import { CiCircleAlert } from "react-icons/ci";
import { DeleteItemProps } from "../../../types/modalContent";

const DeleteItem = ({ nextStep, setCancel, deleteType }: DeleteItemProps) => {
  return (
    <S.DeleteContent>
      <CiCircleAlert />
      <p>Tem certeza que deseja deletar este {deleteType}?</p>
      <ButtonContent spaceBetween>
        <Button
          type="button"
          color="transparent"
          onClick={() => setCancel(false)}
        >
          Cancelar
        </Button>
        <Button type="submit" onClick={nextStep}>
          sim
        </Button>
      </ButtonContent>
    </S.DeleteContent>
  );
};

export default DeleteItem;
