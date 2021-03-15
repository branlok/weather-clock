import React, {useEffect} from "react";
import {useTransition, animated, config} from 'react-spring';
import { connect } from "react-redux";
import {dimensionParams} from '../Utilities/dimensionParams';
function Slides({data, selected, ...props}) {    
  const newParam = { backgroundUrl: dimensionParams[props.imageQuality]}; //dimensionPramas used for requesting imgix formats

  const springy = useTransition(
    data.unsplashData[selected],
    (item) => item.id + dimensionParams,
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: {duration: props.delay},
    }
  );

   return springy.map(({ item, props, key }) => (
        <animated.div
          key={key}
          style={{
            ...props,
            height: "100vh",
            width: "100vw",
            position: "absolute",
            left: 0,
            top: 0,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url(${
              item.urls.raw + newParam.backgroundUrl
            })`,
          }}
        />
      ))
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

export default connect(mapStateToProps, mapDispatchToProps)(Slides);
