import styled from "styled-components";

export const BookSection = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  border: 2px solid lightgray;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const NoBooks = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: center;
  align-items: center;
  color: #333;
  svg {
    font-size: 25px;
  }
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
