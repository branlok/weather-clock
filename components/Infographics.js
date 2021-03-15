import React  from "react";
import { connect } from "react-redux";
import { StyledMainContainer } from "../styles/StyledMainContainer";
import { StyledWeatherInformation } from "../styles/StyledWeatherInformation";
import Notes from "./NotesWidget"
import { StyledButtonFS } from '../styles/StyledButtonFS';
import { useQueryClient, useQuery } from "react-query";
import Clock from "./Clock";
import Cog from "../styles/svg/settings-svgrepo-com-2.svg";
import FullScreen from "../styles/svg/full-screen-selector-svgrepo-com.svg";
import PinnedNote from "./NotesWidget/PinnedNote";
import {useTransition, animated} from 'react-spring';

function usePosts(relevance, keyword) {
    const param = relevance !== "topic" ? relevance : keyword
    return useQuery(param, async () => {
      let data = await fetch(`/api/custom/${param}`).then((res) => res.json());
      return data;
    }, {refetchOnWindowFocus: false});
  }


function Infographics(props) {

  const {data, status} = usePosts(props.relevance, props.keyword);


  if (status == "success" && !props.loadingImages) {
    return (
      <StyledMainContainer brightness={props.brightness}>
        <Clock />
        <StyledWeatherInformation>
          <h1 className="temperature">
            {Math.floor(data.weatherData.main.temp - 273.15)}
            <sup className="superscript">C</sup>
          </h1>
          <p className="description">
            {data.weatherData.weather[0].description}
          </p>
        </StyledWeatherInformation>
        {props.notes && <Notes />}
        {props.pinned && props.notes && <PinnedNote/>}
        <Cog
          className="settings-button"
          onClick={() => props.setShowSettings(true)}
        />
        <StyledButtonFS onClick={props.handle.enter} ><FullScreen className="fullscreen-svg"/></StyledButtonFS>
      </StyledMainContainer>
    );
  } else {
    return null;
  }
}



//step 1
const mapStateToProps = (state) => {
  return {
    delay: state.settings.delay,
    brightness: state.settings.brightness,
    relevance: state.settings.relevance,
    keyword: state.settings.keyword,
    loadingImages: state.general.loadingImages,
    pinned: state.notes.pinned,
    notes: state.settings.notes,
  };
};

//step 2
const mapDispatchToProps = (dispatch) => {
  return {
    adjustDelayDuration: () => dispatch(adjustDelayDuration()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Infographics);
