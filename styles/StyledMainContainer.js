import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
    from {
        {opacity: 0}
    }
    to {
        {opacity: 1}
    }
`;

const fadeOut = keyframes`
    0% {
        {fill: white}
    }
    50% {
        {fill: white}
    }
    100% {
        {fill: grey}
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
  background-color: ${props => `rgba(0,0,0, ${(props.brightness)/100})`};
  /* box-shadow: inset 0px 0px 250px rgba(0,0,0,0.5); */
  .time {
    text-shadow: 0px 0px 10px rgba(0,0,0,0.2);
    animation: ${fadeIn} 0.5s ease 1 backwards;
    animation-delay: 0.5s;
    color: #e3e3e3;//offwhite
    //backdrop-filter: blur(2px);
    background-color: rgba(0,0,0,0.3);
    border-radius: 50px;
    padding: 10px 40px;
   // margin-bottom: 20px;
  }
  .settings-button {
      position: absolute;
      top: 10px;
      right: 10px;
      height: 25px;
      transition: 0.5s;
      cursor: pointer;
      fill: grey;
      animation: ${fadeOut} 0.5s ease 1 backwards;
      &:hover {
          transform: rotate(20deg);
          fill: black;
      }
  }
`;
