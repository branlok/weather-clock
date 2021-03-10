import React from "react";
import { connect } from "react-redux";
import {StyledMainContainer} from '../styles/StyledMainContainer';
import {StyledWeatherInformation} from '../styles/StyledWeatherInformation';
import { useQueryClient } from "react-query";
import Clock from './Clock';
import Cog from "../styles/svg/settings-svgrepo-com-2.svg"

function Infographics(props) {
    const queryClient = useQueryClient();
    const { data, status } = queryClient.getQueryState(props.relevance);

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
      <Cog className="settings-button" onClick={() => props.setShowSettings(true)}/>

    </StyledMainContainer>
  );
}

//step 1
const mapStateToProps = (state) => {
  return {
    delay: state.settings.delay,
    brightness: state.settings.brightness,
    relevance: state.settings.relevance,
  };
};

//step 2
const mapDispatchToProps = (dispatch) => {
  return {
    adjustDelayDuration: () => dispatch(adjustDelayDuration()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Infographics);
