import styled, { keyframes, css } from "styled-components";

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
  background-color: rgba(0,0,0,0);
  /* box-shadow: inset 0px 0px 250px rgba(0,0,0,0.5); */
  .time {
    text-shadow: 0px 0px 10px rgba(0,0,0,0.2);
  }
  .settings-button {
      position: absolute;
      top: 10px;
      right: 10px;
      height: 25px;
      transition: 0.5s;
      cursor: pointer;
      &:hover {
          transform: rotate(20deg);
      }
  }
`;
