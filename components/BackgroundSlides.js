import React, { useState, useEffect } from "react";
import { StyledBGContainer } from "../styles/StyledBGContainer";
import { loadingImages } from "../store/general/generalActions";
import { connect } from "react-redux";
import { StyledLoadingScreen } from "../styles/StyledLoadingScreen";
import { useQueryClient } from "react-query";

function BackgroundSlides(props) {
  const queryClient = useQueryClient();
  const { data, status } = queryClient.getQueryState("images");
  console.log(status);

  const [imgsLoaded, setImgsLoaded] = useState(false)

useEffect(() => {
    const loadImage = image => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = image.urls.regular
        // wait 2 seconds to simulate loading time
        loadImg.onload = () => resolve(image.urls.regular)
        loadImg.onerror = err => reject(err)
      })
    }

    Promise.all(data.unsplashData.map(image => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .then(() => props.loadingImages())
      .catch(err => console.log("Failed to load images", err))
  }, [])


  function arrangeImage(array) {
    let imageEle = array.map((item) => (
      <img key={item.id} src={item.urls.regular}></img>
    ));
    return imageEle;
  }

  return (
    <>
      {imgsLoaded ? 
      <StyledBGContainer
        viewTime={props.presence}
        delay={props.delay}
        imageArray={data.unsplashData}
        numOfImg={data.unsplashData.length}
    
      >
        {arrangeImage(data.unsplashData)}
      </StyledBGContainer>
      : (
        <StyledLoadingScreen>loading images</StyledLoadingScreen>
    )}
      {/* {!imageArray && (
        <StyledLoadingScreen> loading images</StyledLoadingScreen>
      )} */}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    delay: state.settings.delay,
    presence: state.settings.presence,
    brightness: state.settings.brightness,

  };
};

//step 2
const mapDispatchToProps = (dispatch) => {
  return {
    loadingImages: () => dispatch(loadingImages(false)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundSlides);
