import { SelesctProps } from "../../types/select";

import * as S from "./styles";

const Select = ({ children, label, value, onChange }: SelesctProps) => {
  return (
    <S.Container>
      <h3>{label}</h3>
      <S.Select value={value} onChange={onChange}>
        {children}
      </S.Select>
    </S.Container>
  );
};
export default Select;
