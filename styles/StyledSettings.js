import styled, { keyframes, css } from "styled-components";

const transitionIn = keyframes`
    from {
        {transform: rotate(-180deg)}
    }
    to {
        {transform: rotate(0deg)}
    }
`;

const fadeIn = keyframes`
    from {
        {opacity: 0}
    }
    to {
        {opacity: 1}
    }
`;



const pulse = keyframes`
    0% {
        {opacity: 0}
    }
    50% {
        {opacity: 1}
    }

    100% {
        {opacity: 0}
    }
`;


const  spin = keyframes`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`

export const StyledSettings = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  z-index: 2;
    overflow: hidden;
  background-color: #1c1c1c;
  font-family: "Work Sans", sans-serif;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  .title {
    h1 {
      height: 50px;
      font-size: 50px;
      margin-left: 20px;
    }
  }
  .settings-button {
    position: absolute;
    top: 10px;
    right: 10px;
    height: 25px;
    transition: 0.5s;
    z-index: 3;
    cursor: pointer;
    animation: ${transitionIn} 0.5s ease 1 backwards;
    fill: grey;
    &:hover {
      fill: white;
    }
  }
  button {
    cursor: pointer;
  }
  .reset-button {
    position: absolute;
    background-color: transparent;
    color: red;
    font-weight: bold;
    height: 25px;
    padding: 0px 20px;
    top: 10px;
    right: 210px;
    right: 50px;
    border-style: none;
    border-radius: 3px;
    transition: 0.2s;
    border: 2px solid red;
    &:hover {
      color: white;
      background-color: red;
      border: 2px solid transparnet;
    }
  }
  /* .update-button {
    position: absolute;
    background-color:${(props) =>
    props.modified ? "#edb84e" : "rgba(0,0,0,0.2)"}  ;
    color: white;
    font-weight: bold;
    height: 25px;
    padding: 0px 20px;
    top: 10px;
    right: 50px;
    border-style: none;
    border-radius: 3px;
    transition: 0.5s;
    &:hover {
        background-color: #39c72a;
        
    }
  } */
`;

export const StyledConfigContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 50px;
  nav {
    width: 200px;
    height: 80%;
    border-right: 3px solid white;
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
    align-items: right;
    ul {
      text-decoration: none;
      list-style: none;
      text-align: right;
      li {
        font-size: 30px;
        margin-bottom: 10px;
        transition: 0.2s;
        cursor: pointer;
        &:hover {
          color: white;
        }
      }
      .background-tab {
        color: ${(props) =>
          props.tab == "background-tab" ? "#e8e8e8" : "#515151"};
      }
      .photos-tab {
        color: ${(props) =>
          props.tab == "photos-tab" ? "#e8e8e8" : "#515151"};
      }
      .misc-tab {
        color: ${(props) => (props.tab == "misc-tab" ? "#e8e8e8" : "#515151")};
      }
    }
  }
  .container {
    width: calc(100% - 200px);
    height: 80%;
    padding: 0px 20px;
  }
`;

export const StyledContainerBg = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  overflow-y: scroll;
  scrollbar-width: none;
  padding: 0px 10px;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 0;
    height: 0;
  }
  h2 {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px dashed grey;
  }
  label {
    margin-bottom: 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #d1d1d1;
    output {
      color: grey;
      margin-left: 10px;
      align-self: right;
    }
  }
  .slider {
    appearance: none;
    margin-bottom: 40px;
    background-color: white;
    outline: none;
    height: 2px;
    &::-webkit-slider-thumb {
      appearance: none;
      width: 10px; /* Set a specific slider handle width */
      height: 10px;
      transform: rotate(45deg); /* Slider handle height */
      background: white; /* Green background */
      cursor: pointer; /* Cursor on hover */
    }
  }
  .radio-container {
    margin-bottom: 40px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #d1d1d1;
    .radio {
      margin-left: 15px;
      margin-right: 10px;
      height: 25px;
    }
    .weather {
      position: relative;
      &:before {
        position: absolute;
        content: "";
        top: -24px;

        left: -3px;
        opacity: 0;
        height: 20px;
        width: 20px;
        background-color: #cc333b;
        transform: rotate(45deg);
        transition: 0.3s;
      }
      &:after {
        position: absolute;
        content: "require geolocation enabled";
        top: -40px;
        left: -10px;
        opacity: 0;
        padding: 10px;
        width: 200px;
        color: white;
        border-radius: 10px;
        background-color: #cc333b;
        font-weight: bold;
        transition: 0.3s;
      }
      &:hover:after{
        opacity: 1;
      }
      &:hover:before{
        color: red;
        opacity: 1;
      }
    }

    .radio:nth-of-type(1) {
      margin-left: 0px;
    }
    form {
      height: 25px;
      display: flex;
      font-family: Arial, Helvetica, sans-serif;
      .text {
        margin-left: 15px;
        margin-right: 10px;
        background-color: #d1d1d1;
        color: black;
        border-style: none;
        height: 25px;
        padding-left: 10px;
        font-size: 14px;
        border-radius: 3px;
        outline: none;

        &:disabled {
          background-color: grey;
        }
      }
      button {
        background-color: #363636;
        color: white;
        border-style: none;
        height: 25px;
        padding: 0px 15px;
        font-weight: bold;
        margin-right: 10px;
        font-size: 14px;
        border-radius: 3px;
      }
      output {
        background-color: #69ab0c; // magenta #d10826;
        color: white;
        border-radius: 15px;
        border-style: none;
        height: 25px;
        padding: 0px 15px;
        margin-left: 15px;
        font-weight: bold;
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
      }
    }
  }
`;

export const StyledContainerInter = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  overflow-y: scroll;
  scrollbar-width: none;
  padding: 0px 10px;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 0;
    height: 0;
  }
  scrollbar-width: 0px;
  h2 {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px dashed grey;
  }
  label {
    margin-bottom: 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #d1d1d1;
    output {
      color: grey;
      margin-left: 10px;
      align-self: right;
    }
  }
  .slider {
    appearance: none;
    margin-bottom: 40px;
    background-color: white;
    outline: none;
    height: 2px;
    &::-webkit-slider-thumb {
      appearance: none;
      width: 10px; /* Set a specific slider handle width */
      height: 10px;
      transform: rotate(45deg); /* Slider handle height */
      background: white; /* Green background */
      cursor: pointer; /* Cursor on hover */
    }
  }
  .radio-container {
    margin-bottom: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #d1d1d1;
    .radio {
      margin-left: 15px;
      margin-right: 10px;
      height: 25px;
    }
    .text {
      margin-left: 15px;
      margin-right: 10px;
    }
    .radio:nth-of-type(1) {
      margin-left: 0px;
    }
  }
  .switch-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid rgba(255, 255, 255, 0.05);
    margin-bottom: 20px;
    .switch {
      position: relative;
      width: 65px;
      height: 34px;
      input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      .loader {
        display: ${props => props.loader ? "flex" : "none"};
        font-size: 14px;
        position: absolute;
        left: -130px;
        height: 34px;
        width: 150px;
        justify-content: flex-start;
        align-items: center;
        fill: white;
        animation: ${pulse} 2s ease infinite;
        
      }
    }

    .slider2 {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }
    .slider2:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    input:checked + .slider2 {
      background-color: green;
    }

    input:focus + .slider2 {
      box-shadow: 0 0 1px #2196f3;
    }

    input:checked + .slider2:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
  }
`;
