import { useState } from "react";
import ToggleButtons from "../../components/ToggleButtons";

export const Dashboard = () => {
  const [isSelected, setIsSelected] = useState<string>("authors");

  return (
    <div>
      <ToggleButtons isSelected={isSelected} setIsSelected={setIsSelected} />
    </div>
  );
};
