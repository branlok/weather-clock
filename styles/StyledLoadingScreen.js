import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
    from {
        {opacity: 0;}
    }
    to {
        {opacity: 1;}
    }
`;

export const StyledLoadingScreen = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.9);
  background-color: #242424;
  color: #f5f5f5;
  font-family: "Work Sans", sans-serif;
  /* div {
    margin-top: 50px;
    padding: 15px 50px;
    border-radius: 5px;

  } */
`;
