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
