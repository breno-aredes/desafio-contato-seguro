import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
`;

export const Content = styled(Dialog.Content)`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 500px;
`;
