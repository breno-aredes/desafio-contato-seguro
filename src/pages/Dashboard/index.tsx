import { useState } from "react";
import ToggleButtons from "../../components/ToggleButtons";
import { DashBoardBody } from "./styles";
import Authors from "../../components/Authors";

export const Dashboard = () => {
  const [isSelected, setIsSelected] = useState<string>("authors");

  return (
    <DashBoardBody>
      <ToggleButtons isSelected={isSelected} setIsSelected={setIsSelected} />
      {isSelected === "authors" && <Authors authors={[]} />}
    </DashBoardBody>
  );
};
