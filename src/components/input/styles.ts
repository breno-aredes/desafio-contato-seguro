import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-height: 94px;
  height: auto;

  label {
    font-size: 15px;
    color: #717171;
    width: auto;
    margin-bottom: 2px;
  }
  p {
    color: #fb5643;
    font-size: 13px;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 8px;
  background-color: #ffffff;
  border: 2px solid lightgray;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: #aaaaaa;
  }

  input {
    border: none;
    width: 100%;
    height: 100%;
    font-family: "Poppins", serif;
    font-size: 15px;
    color: #1a1a1a;

    &::placeholder {
      color: #aaaaaa;
    }

    &:focus {
      outline: none;
    }
  }
`;
