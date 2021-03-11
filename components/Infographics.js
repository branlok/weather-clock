import React from "react";
import { connect } from "react-redux";
import { StyledMainContainer } from "../styles/StyledMainContainer";
import { StyledWeatherInformation } from "../styles/StyledWeatherInformation";
import { useQueryClient, useQuery } from "react-query";
import Clock from "./Clock";
import Cog from "../styles/svg/settings-svgrepo-com-2.svg";

function usePosts(relevance, keyword) {
    const param = relevance !== "topic" ? relevance : keyword
    return useQuery(param, async () => {
      let data = await fetch(`/api/custom/${param}`).then((res) => res.json());
      return data;
    }, {refetchOnWindowFocus: false});
  }


function Infographics(props) {
//   const queryClient = useQueryClient();
// //   const data = queryClient.getQueryData(props.relevance);
// console.log(props.relevance);
//   const data = queryClient.getQueryData(props.relevance);
//   console.log(data)

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
        <Cog
          className="settings-button"
          onClick={() => props.setShowSettings(true)}
        />
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
  };
};

//step 2
const mapDispatchToProps = (dispatch) => {
  return {
    adjustDelayDuration: () => dispatch(adjustDelayDuration()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Infographics);
