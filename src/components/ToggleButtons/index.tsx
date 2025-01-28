import React from "react";
import { FaBook, FaUser } from "react-icons/fa";
import * as S from "./styles";

interface ToggleButtonsProps {
  isSelected: string;
  setIsSelected: (value: string) => void;
}

const ToggleButtons: React.FC<ToggleButtonsProps> = ({
  isSelected,
  setIsSelected,
}) => {
  return (
    <S.OptionsContainer>
      <S.OptionCard
        isActive={isSelected === "books"}
        onClick={() => setIsSelected("books")}
      >
        <FaBook />
        <h2>Livros</h2>
      </S.OptionCard>
      <S.OptionCard
        isActive={isSelected === "authors"}
        onClick={() => setIsSelected("authors")}
      >
        <FaUser />
        <h2>Autores</h2>
      </S.OptionCard>
    </S.OptionsContainer>
  );
};

export default ToggleButtons;
