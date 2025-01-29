import styled from "styled-components";

export const Select = styled.select`
  width: 100%;
  border-radius: 12px;
  padding: 8px 11px;
  border: 1px solid #d3d3d3;
  height: 60px;
  color: #4a4a4a;
  font-size: 17px;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: start;
  gap: 8px;
  margin-bottom: 8px;
  h3 {
    text-align: start;
    margin-top: 32px;
    font-size: 19px;
    color: #5a5a5a;
    font-weight: normal;
  }
`;
