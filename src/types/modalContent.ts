import { Dispatch, SetStateAction } from "react";

export interface SimpleContentProps {
  setCancel: Dispatch<SetStateAction<boolean>>;
  type: string;
  nextStep?: () => void;
}
