import styled from "styled-components";

interface OptionCardProps {
  isActive: boolean;
}

export const OptionsContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  width: 100%;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid lightgray;
  border-radius: 13px;
`;

export const OptionCard = styled.div<OptionCardProps>`
  background-color: ${(props) => (props.isActive ? "#4a90e2" : "#fff")};
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  padding: 8px;

  &:hover {
    background-color: ${(props) => (props.isActive ? "#2f79ce" : "#f5f5f5")};
  }

  h2 {
    font-size: 15px;
    color: ${(props) => (props.isActive ? "#fff" : "#333")};
  }

  svg {
    color: ${(props) => (props.isActive ? "#fff" : "#333")};
    margin-bottom: 5px;
  }
`;
