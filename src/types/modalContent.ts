import { Dispatch, SetStateAction } from "react";

export interface DeleteItemProps {
  nextStep: () => void;
  setCancel: Dispatch<SetStateAction<boolean>>;
  deleteType: string;
}
