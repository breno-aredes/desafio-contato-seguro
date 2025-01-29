import styled from "styled-components";

export const ButtonContent = styled.div<{ spaceBetween?: boolean }>`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: ${({ spaceBetween }) =>
    spaceBetween ? " space-between" : "end"};
  gap: 30px;
`;
