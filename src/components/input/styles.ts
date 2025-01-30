import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 90px;
  label {
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

export const InputContainer = styled.div`
  min-height: 30px;
  max-height: 30px;
  padding: 8px;
  background-color: #ffffff;
  border: 2px solid lightgray;
  border-radius: 8px;

  svg {
    color: #aaaaaa;
  }

  input {
    border: none;
    width: 100%;
    height: 100%;
    font-size: 15px;
    color: #333;

    &::placeholder {
      color: #aaaaaa;
    }

    &:focus {
      outline: none;
    }
  }
`;
