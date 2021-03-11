import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
    from {
        {opacity: 0}
    }
    to {
        {opacity: 1}
    }
`;

export const StyledMainContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 10vw;
  color: #f5f5f5;
  font-family: 'Work Sans', sans-serif;
  animation: ${fadeIn} 1s ease 1 backwards;
  background-color: ${props => `rgba(0,0,0, ${(100 - props.brightness)/100})`};
  /* box-shadow: inset 0px 0px 250px rgba(0,0,0,0.5); */
  .time {
    text-shadow: 0px 0px 10px rgba(0,0,0,0.2);
    animation: ${fadeIn} 0.5s ease 1 backwards;
    animation-delay: 0.5s;
  }
  .settings-button {
      position: absolute;
      top: 10px;
      right: 10px;
      height: 25px;
      transition: 0.5s;
      cursor: pointer;
      animation: ${fadeIn} 0.5s ease 1 backwards;
      animation-delay: 1s;
      &:hover {
          transform: rotate(20deg);
          fill: black;
      }
  }
`;
