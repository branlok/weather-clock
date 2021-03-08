import styled, { keyframes, css } from "styled-components";

const ImageFadeAnimation = ({ viewTime, delay, numOfImg }) => {
  let totalAnimationTime = (viewTime + delay) * numOfImg;
  let animationInterval = viewTime + delay;
  console.log();
  return keyframes`
  0% {
    opacity:1;
  }
  ${(viewTime / totalAnimationTime) * 100}% {
    opacity: 1; 
  }
  ${(animationInterval / totalAnimationTime) * 100}% {
      opacity: 0;
  }
  ${100 - (delay / totalAnimationTime) * 100}% {
      opacity: 0;
  }
  100% {
      opacity: 1;
  }


`;
};

export const StyledBGContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;

  & img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    animation-name: ${(props) => ImageFadeAnimation(props)};
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: ${({ viewTime, delay, numOfImg }) =>
      `${(viewTime + delay) * numOfImg}s`};
  }
  ${({ numOfImg, imageArray, viewTime, delay }) => {
    let templateLiteral = ``;
    let delayInterval = 0;
    imageArray.map((item, idx) => {
        //last item should contain 0delay because its the first item on top.
      templateLiteral += `& img:nth-of-type(${numOfImg - idx}) {
    animation-delay: ${delayInterval}s;
  }`;
      delayInterval += (viewTime + delay) ;
    });

    return templateLiteral;
  }}/*   
  & img:nth-of-type(0) {
    animation-delay: 0s;
  }
  & img:nth-of-type(1) {
    animation-delay: 5s;
  } */
`;
