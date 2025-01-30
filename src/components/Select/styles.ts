import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: start;
  margin-bottom: 8px;
  h3 {
    font-size: 15px;
    color: #717171;
    width: auto;
    margin-bottom: 2px;
    margin-left: 3px;
  }
  p {
    margin-left: 3px;
    color: #fb5643;
    font-size: 13px;
  }
`;

export const Select = styled.select`
  width: 100%;
  border-radius: 8px;
  padding: 8px 11px;
  border: 2px solid lightgray;
  height: 52px;
  color: #4a4a4a;
  font-size: 17px;
  cursor: pointer;
`;
