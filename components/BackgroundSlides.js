import React, { useState, useEffect } from "react";
import { StyledBGContainer } from "../styles/StyledBGContainer";
import { loadingImages } from "../store/general/generalActions";
import { connect } from "react-redux";
import { StyledLoadingScreen } from "../styles/StyledLoadingScreen";
import { useQueryClient } from "react-query";
import {setModified} from '../store/general/generalActions';

function BackgroundSlides(props) {
  const queryClient = useQueryClient();
  const { data, status } = queryClient.getQueryState(props.relevance);

  const [imgsLoaded, setImgsLoaded] = useState(false)
  
  const params = {
    lowest: "&w=1200&dpr=1",
    optimized: "&w=1000&dpr=2",
    highest: "&w=1500&fm=webp&dpr=2"
}

//"&w=1500&dpr=2"
useEffect(() => {
    if (props.modified) {
        setImgsLoaded(false)
        const loadImage = (image) => {
            return new Promise((resolve, reject) => {
              const loadImg = new Image()
              loadImg.src = (image.urls.raw + params[props.imageQuality])
              // wait 2 seconds to simulate loading time
              loadImg.onload = () => resolve(image.urls.raw + params[props.imageQuality])
              loadImg.onerror = err => reject(err)
            })
          }
          
          Promise.all(data.unsplashData.slice(0, props.numOfImages).map(image => loadImage(image)))
            .then(() => setImgsLoaded(true))
            .then(() => props.loadingImages())
            .then(() => props.setModified(false))
            .catch(err => console.log("Failed to load images", err))
    } else {
         //modified is always true after settings change and async event. In the case of unmodified, keep imgloaded page open.
        setImgsLoaded(true)
    }
  }, [props.modified])


  let arrangeImage = (array) => {
    let imageEle = array.map((item) => (
      <img key={item.id} src={item.urls.raw + params[props.imageQuality]}></img>
    ));
    return imageEle;
  }

  return (
    <>
      {imgsLoaded ? 
      <>
      <StyledLoadingScreen></StyledLoadingScreen>
      <StyledBGContainer
        viewTime={props.presence}
        delay={props.delay}
        imageArray={data.unsplashData.slice(0, props.numOfImages)}
        numOfImg={data.unsplashData.slice(0, props.numOfImages).length}
      >
        {arrangeImage(data.unsplashData.slice(0, props.numOfImages))}
      </StyledBGContainer>
      
      </>
      : (
        <StyledLoadingScreen>loading and optimizing images</StyledLoadingScreen>
    )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    delay: state.settings.delay,
    presence: state.settings.presence,
    brightness: state.settings.brightness,
    relevance: state.settings.relevance,
    modified: state.general.modified,
    imageQuality: state.settings.imageQuality,
    numOfImages: state.settings.numOfImages,
    keyword: state.settings.keyword,
  };
};

//step 2
const mapDispatchToProps = (dispatch) => {
  return {
    loadingImages: () => dispatch(loadingImages(false)),
    setModified: (val) => dispatch(setModified(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundSlides);
