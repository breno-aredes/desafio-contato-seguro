import { useState } from "react";
import ToggleButtons from "../../components/ToggleButtons";
import { DashBoardBody } from "./styles";

export const Dashboard = () => {
  const [isSelected, setIsSelected] = useState<string>("authors");

  return (
    <DashBoardBody>
      <ToggleButtons isSelected={isSelected} setIsSelected={setIsSelected} />
    </DashBoardBody>
  );
};
