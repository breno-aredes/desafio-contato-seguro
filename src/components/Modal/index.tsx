import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ModalProps } from "../../types/modal";
import * as S from "./styles";

const Modal: React.FC<ModalProps> = ({ isModalOpen, children }) => {
  return (
    <Dialog.Root open={isModalOpen}>
      <S.Overlay />
      <S.Content>{children}</S.Content>
    </Dialog.Root>
  );
};

export default Modal;
