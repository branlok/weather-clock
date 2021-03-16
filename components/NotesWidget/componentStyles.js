import styled, { keyframes } from "styled-components";
import { animated } from "react-spring";
const transitionIn = keyframes`
  from {
    {opacity: 0}
  }
  to {
    {opacity: 0.1}
  }
`;

const fadeOut = keyframes`
    0% {
        {opacity: 1}
    }
    50% {
        {opacity: 1}
    }
    100% {
        {opacity: 0.1}
    }
`;

const fadeOutT = keyframes`
    0% {
        {opacity: 0}
    }
    50% {
        {opacity: 0}
    }
    100% {
        {opacity: 1}
    }
`;

const fadeIn = keyframes`
  0% {
    {opacity: 0; height: 0px}
}
100% {
    {opacity: 1}
}
`

const translateIn = keyframes`
    0% {
        {transform: translateY(200px)}
    }
    25% {
        {transform: translateY(200px)}
    }
    100% {
      {transform: translateY(0px)}
    }
`;

const filler = keyframes`
    0% {
        {width: 0px}
    }
    25% {
        {width:0px}
    }
    100% {
      {width: calc((100% - 40px) / 4); }
    }
`;

const fadeInOpacity =keyframes`
      0% {
        {opacity:0;}
    }
    100% {
      {opacity:1;}
    }
`

export const StyledContainer = styled.div`
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: calc(170px + 2vw);
  padding: 20px 20px;
  z-index: 2;
  //animation: ${transitionIn} 1s ease 1;
  opacity: 1;
  transition: 0.5s;
  background-color: rgba(0, 0, 0, 0.4);
  transform: ${(props) =>
    props.open ? "translateY(0px)" : "translateY(calc(170px + 2vw))"};
  .toggle-button {
    position: absolute;
    top: -35px;
    left: 10px;
    width: 130px;
    font-size: 16px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 1);
    opacity: 0.1;
    animation: ${fadeOut} 4s ease backwards;
    border-style: none;
    font-weight: bold;
    color: white;
    padding: 2px 10px;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .add-button {
    position: absolute;
    top: -35px;
    left: 150px;
    font-size: 16px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 1);
    opacity: 1;
    animation: ${fadeOutT} 1s ease backwards;
    border-style: none;
    font-weight: bold;
    color: white;
    padding: 2px 20px;
    transition: 0.3s;
    cursor: pointer;
    &:focus {
      outline: 1px solid white; //testing this instead of none
    }
    &:hover {
      opacity: 1;
    }
  }
  &:hover {
    opacity: 1;
  }
  .scrollContainer {
    height: 100%;
    width: initial;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 5px;
    padding: 0px 10px;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 0;
      height: 0;
    }
    scrollbar-width: none;
  }
  .placeholder {
    height: 100%;
    width: 0px;
    border: 1px solid red;
    animation: ${filler} 1s ease forwards;
  }
`;

export const StyledNote = styled.div`
  position: relative;
  height: 100%;
  width: calc((100% - 40px) / 4);
  flex-shrink: 0;
  background-color: ${(props) => props.color};
  margin: 0px 10px;
  overflow: hidden;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
  transition: 0.3s;
  animation: ${translateIn} 1s ease 1;
  .pinned-blocker {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 10;
    background-color: rgba(255,255,255,0.3);
    backdrop-filter: blur(3px);
    animation: ${fadeInOpacity} 0.5s ease 1;
    border-radius: 5px;
    color: black;
    
    button {
      position: relative;
      border-style: none;
      margin: 10px;
      padding: 10px 15px;
      background-color: rgba(255,255,255,0.3);
      color: black;
      font-weight: bold;
      border-radius: 2px;
      cursor: pointer;
      &:hover {
        background-color: rgba(255,255,255,0.5);
      }
    }
  }
  &:first-of-type {
    margin-left: -10px;
    //width: 0px;
    //animation: ${filler} 1s ease 1 forwards;
  }
  & .public-DraftEditorPlaceholder-root{
    color: #696969;
  }
  & .DraftEditor-root {
    height: calc(100% - 35px);
    word-break: break-all;
    width: 100%;
    min-height: 50px;
    font-size: 14px;
    padding: 5px;
    overflow: scroll;
    color: #262626;
    font-family: Arial, Helvetica, sans-serif;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 0;
      height: 0;
    }
  }

  &:hover {
  }
  &:after {
    position: absolute;
    //content: "";
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    background-image: url("https://t4.ftcdn.net/jpg/01/89/38/41/360_F_189384187_tpPGzPwlOSxHqck7f5Q9XJGwkkx4VqnE.jpg");
    background-size: cover;
    opacity: 0.3;
    mix-blend-mode: multiply;
    pointer-events: none;
    overflow: hidden;
    border-radius: 5px;
  }

  header {
    width: 100%;
    /* height: 20px; */
    padding: 5px;
    margin-top: -5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    .title {
      font-weight: bold;
      overflow: hidden;
      padding: 5px 5px 5px 0px;
      font-size: 18px;
      color: black;
      width: 100%;
    }
    .edit-button {
      border-style: none;
      background-color: transparent;
      font-weight: bold;
      color: black;
      height: 100%;
      padding: 0px 15px;
      display:flex;
      justify-content: center;
      align-items: center;
      margin-right: -5px;
      border-radius: 3px;
      background-color: rgba(255,255,255,0.5);
      transition: 0.3s;
      color: #3d3d3d;
      cursor: pointer;
      &:hover {
        background-color: rgba(255,255,255,0.7);
      }
      &:active {
        transform: scale(0.9);
        background-color: rgba(255,255,255,1);
        outline: none;
      }
      .edit-svg {
        width: auto;
        height: 15px;
        margin-left: 5px;
        fill: #3d3d3d;
      }
    }
    .delete-button {
      border-style: none;
      background-color: transparent;
      font-weight: bold;
      color: black;
      height: 100%;
      padding: 0px 15px;
      display:flex;
      justify-content: center;
      align-items: center;
      margin-right: 5px;
      border-radius: 3px;
      background-color: #e36666;
      transition: 0.3s;
      color: white;
      cursor: pointer;
      &:hover {
        background-color:#eb3b3b;
      }

    }
  }

  .action-footer {
    height: 15px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    z-index: 15;
    
    .circle {
      height: 15px;
      width: 15px;
      margin: auto;
      border-radius: 50%;
      margin: 0px 5px;
      border: 2px solid #2b2b2b;
      opacity: 0;
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        border: 2px solid black;
        transform: scale(1.25);
        transition: 0.3s;
      }
    }
    .white {
      background-color: #c9c9c9;
    }
    .red {
      background-color: #f06960;
    }
    .green {
      background-color: #5fed8c;
    }
    .purple {
      background-color: #c953ed;
    }
    .yellow {
      background-color: #f2c23f;
    }
  }
  &:hover .circle {
    opacity: 1;
  }
  .message {
    height: calc(100% - 35px);
    word-break: break-all;
    width: 100%;
    font-size: 14px;
    padding: 5px;
    overflow: scroll;
    color: #262626;
    font-family: Arial, Helvetica, sans-serif;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 0;
      height: 0;
    }
  }

  input {
    background-color: transparent;
    padding: 5px 5px 5px 0px;
    border-style: none;
    color: black;
    font-weight: bold;
    font-family: "Work Sans", sans-serif;
    font-size: 18px;
    width: 100%;
    &:focus {
      outline: none;
    }
  }
  textarea {
    height: calc(100% - 35px);
    background-color: transparent;
    padding: 5px;
    border-style: none;
    color: black;
    resize: none;
    scrollbar-width: 0px;
    font-size: 14px;
    color: #262626;
    font-family: Arial, Helvetica, sans-serif;
    &:focus {
      outline: none;
    }
    &::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 0;
      height: 0;
    }
  }
`;

export const StyledPinnedNote = styled(animated.div)`
  margin-top: 20px;
  position: relative;
  padding: 20px;
  width: 80vw;
  width: ${props => props.pinnedSize == "small" ? "40vw" : props.pinnedSize == "medium" ? "50vw" : "80vw" };
  height: ${props => props.pinnedSize == "small" ? "150px" : props.pinnedSize == "medium" ? "250px" : "300px" };
  background-color: #212121;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  border:${props => `2px solid ${props.color}`};
  animation: ${fadeIn} 1s ease 1;
  transition: 0.5s;
  & .DraftEditor-root {
    height: 100%;
    word-break: break-all;
    width: 100%;
    font-size: 16px;
    padding: 5px;
    overflow: scroll;
    font-family: Arial, Helvetica, sans-serif;
    scrollbar-width: none;
    color: #d1d1d1;
    &::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 0;
      height: 0;
    }
  }
  .resize-action-container {
    position: absolute;
    bottom: 10px;
    right: 5px;
    display: flex;
    align-items: center;
    button {
      background-color: rgba(255,255,255,0.2);
      border-radius: 50%;
      width: 20px;
      height: 20px;
      font-size: 12px;
      color: grey;
      border-style: none;
      margin: 0px 5px;
      font-weight: bold;
      cursor: pointer;
      transition: 0.3s;
      &:focus {
        outline: none;
      }
      &:hover {
        color: white;
        background-color: rgba(255,255,255,0.5);
      }
    }
  }
`;
