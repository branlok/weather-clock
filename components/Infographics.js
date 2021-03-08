import React from "react";
import { connect } from "react-redux";
import {StyledMainContainer} from '../styles/StyledMainContainer';
import {StyledWeatherInformation} from '../styles/StyledWeatherInformation';
import { useQueryClient } from "react-query";
import Clock from './Clock';

function Infographics(props) {
    const queryClient = useQueryClient();
    const { data, status } = queryClient.getQueryState("images");

  return (
    <StyledMainContainer>
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
      <img className="settings-button" src="/settings-svgrepo-com-2.svg"></img>
    </StyledMainContainer>
  );
}

//step 1
const mapStateToProps = (state) => {
  return {
    delay: state.settings.delay,
  };
};

//step 2
const mapDispatchToProps = (dispatch) => {
  return {
    adjustDelayDuration: () => dispatch(adjustDelayDuration()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Infographics);
