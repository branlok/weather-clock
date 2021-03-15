import React, { useState, useEffect } from "react";
import usePosts from '../Utilities/usePosts';
import useWindowDimensions from '../Utilities/useWindowDimensions';
import { loadingImages } from "../../store/general/generalActions";
import { connect } from "react-redux";
import { StyledLoadingScreen } from "../../styles/StyledLoadingScreen";
import { setModified } from "../../store/general/generalActions";
import {dimensionParams} from '../Utilities/dimensionParams';
import Slides from "./Slides";

function BackgroundSlides(props) {
  const { data, status } = usePosts(props.relevance, props.keyword); //Organizing async store via React-Query
  const [selected, setSelected] = useState(0); //index of image being displayed.
  const [imgsLoaded, setImgsLoaded] = useState(false); //True when Images successfull cached.

  //Interval Iterator
  useEffect(() => {
    let interval = setInterval(
      () => setSelected((state) => (state + 1) % props.numOfImages),
      props.presence + props.delay
    );

    return () => clearInterval(interval);
  }, [imgsLoaded, props.delay, props.presence, props.numOfImages]);

  useEffect(() => {
    if (status === "success") {
      setImgsLoaded(false);
      props.loadingImages(true);
      const loadImage = (image) => {
        console.log("Chacheing Images")
        return new Promise((resolve, reject) => {
          const loadImg = new Image();
          loadImg.src = image.urls.raw + dimensionParams[props.imageQuality];
          // wait 2 seconds to simulate loading time
          loadImg.onload = () =>
            resolve(image.urls.raw + dimensionParams[props.imageQuality]);
          loadImg.onerror = (err) => reject(err);
        });
      };
      Promise.all(
        data.unsplashData
          .slice(0, props.numOfImages)
          .map((image) => loadImage(image))
      )
        .then(() => setImgsLoaded(true))
        .then(() => props.loadingImages())
        .catch((err) => console.log("Failed to load images", err));
    }
  }, [status, props.imageQuality]);

  //recieve data, cache images, show Slides
  if (status === "success") {
    return (
      <>
        <StyledLoadingScreen/>
        {imgsLoaded ? (
          <Slides
            data={data}
            selected={selected}
            // width={width}
            // height={height}
          />
        ) : 
        <StyledLoadingScreen>Caching Images...</StyledLoadingScreen>}
      </>
    );
  } else {
    return <StyledLoadingScreen>Downloading Images...</StyledLoadingScreen>;
  }
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
    loadingImages: (val) => dispatch(loadingImages(val)),
    setModified: (val) => dispatch(setModified(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundSlides);
