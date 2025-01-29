import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  font-family: "DM Sans", sans-serif;
  letter-spacing: 0.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/src/assets/books.jpg");
    background-repeat: repeat;
    background-size: auto;
    background-position: top left;
    animation: moveBackground 10s linear infinite;
    opacity: 0.2;
    z-index: -1;
  }

  @keyframes moveBackground {
    from {
      background-position: top left;
    }
    to {
      background-position: -612px -408px;
    }
  }
`;
