import styled, { keyframes, css } from "styled-components";

const transitionIn = keyframes`
    from {
        {left: 100%}
    }
    to {
        {left: 0px}
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

export const StyledSettings = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  z-index: 2;
  animation: ${fadeIn} 1s ease 1;
  background-color: #1c1c1c;
  font-family: "Work Sans", sans-serif;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  .title {
    h1 {
      font-size: 50px;
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
    animation: ${fadeIn} 1s ease 1 backwards;
    animation-delay: 1s;
    &:hover {
      transform: rotate(20deg);
    }
  }
`;

export const StyledConfigContainer = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 100px;
  nav {
    width: 200px;
    height: 70%;
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
        color: ${props => props.tab == "background-tab" ? "#e8e8e8" : "#515151"}
      }
      .photos-tab {
        color: ${props => props.tab == "photos-tab" ? "#e8e8e8" : "#515151"}
      }
      .misc-tab {
        color: ${props => props.tab == "misc-tab" ? "#e8e8e8" : "#515151"}
      }

    }
  }
  .container {
      width: calc(100% - 200px);
      height: 70%;
      padding: 0px 50px;
  }
`;


export const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  label {
      margin-bottom: 15px;
  }
  input {
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
  
`