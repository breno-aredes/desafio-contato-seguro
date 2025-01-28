import styled from "styled-components";

export const Body = styled.body`
  width: 100%;
  height: 100vh;
  background-image: url("/src/assets/books.jpg");
  background-repeat: repeat;
  background-size: auto;
  background-position: top left;
  animation: moveBackground 10s linear infinite;
  opacity: 0.2;
  @keyframes moveBackground {
    from {
      background-position: top left;
    }
    to {
      background-position: -612px -408px;
    }
  }
`;
