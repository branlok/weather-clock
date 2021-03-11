import styled, { keyframes, css } from "styled-components";

const fadeOut = keyframes`
    0% {
        {opacity: 1}
    }
    50% {
        {opacity: 1}
    }
    100% {
        {opacity: 0.05}
    }
`;

export const StyledButtonFS = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  height: 25px;
  font-size: 15px;
  transition: 0.5s;
  border-style: none;
  color: white;
  border-radius: 5px;
  padding: 20px 20px;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeOut} 4s ease backwards;
  opacity: 0.05;
  transition: 0.5s;
  &:hover {
    background-color: rgba(0, 0, 0, 1);
    opacity: 1;
    color: white;
    left: 13px;
  }
  &::after {
      content: "full screen";
      left: 0px;
      top: 0px;
      height: 25px;
      width: 100px;
      padding-left: 20px;
      display: flex;
  justify-content: center;
  align-items: center;
  }
  .fullscreen-enabled & {
    display: none;
  }
  .fullscreen-svg {
      height: 15px;
      width: 15px;
      fill: white;
      //margin-right: 10px;
  }
  cursor: pointer;
`;
