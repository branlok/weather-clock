import React, { useState, useEffect } from "react";
import { StyledBGContainer } from "../styles/StyledBGContainer";
import {loadingImages} from "../store/general/generalActions";
import {connect} from 'react-redux';
import {StyledLoadingScreen} from '../styles/StyledLoadingScreen';
import { useQueryClient } from "react-query";

function BackgroundSlides(props) {
  const queryClient = useQueryClient();
  const { data, status } = queryClient.getQueryState("images");
  console.log(status);

  const [imageArray, setImageArray] = useState(false);

  useEffect(() => {
    if (status === "success") {
      setImageArray(arrangeImage(data.unsplashData));
      props.loadingImages();
    }
  }, [status]);

  if (imageArray) {
    return (
        <StyledBGContainer
          viewTime={15}
          delay={2}
          imageArray={data.unsplashData}
          numOfImg={data.unsplashData.length}
        >
          {imageArray}
        </StyledBGContainer>
      );
  } else {
      return <StyledLoadingScreen> Getting Hi-res Images </StyledLoadingScreen>
  }
}

function arrangeImage(array) {
  let imageEle = array.map((item) => (
    <img key={item.id} src={item.urls.full}></img>
  ));
  
  return imageEle;
}

const mapStateToProps = (state) => {
    return {
      delay: state.settings.delay,
    };
  };
  
  //step 2
  const mapDispatchToProps = (dispatch) => {
    return {
      loadingImages: () => dispatch(loadingImages(false))
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundSlides);
