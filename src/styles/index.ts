import styled from "styled-components";

export const ButtonContent = styled.div<{ spaceBetween?: boolean }>`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: ${({ spaceBetween }) =>
    spaceBetween ? " space-between" : "end"};
  gap: 30px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  border-bottom: 2px solid #ddd;
  padding: 10px;
  text-align: left;
  &:first-child {
    width: 50px;
  }

  &:last-child {
    text-align: center;
    width: 100px;
  }

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

export const TableCell = styled.td`
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;

  &:last-child {
    display: flex;
    width: 100px;
    gap: 10px;
    justify-content: center;
  }
`;
