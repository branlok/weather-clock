import React from "react";
import { StyledContainer } from "../../styles/StyledSettings";
import {
  adjustDelayDuration,
  adjustBrightnessDuration,
  adjustPresenceDuration,
} from "../../store/settings/settingsActions";
import { connect } from "react-redux";

function BackgroundSettings(props) {
  return (
    <StyledContainer>
      <label>Presence</label>
      <input type="range" min="1" max="10" value={props.presence} onChange={(e) => {e.preventDefault(); props.setPresence(parseInt(e.target.value))}}></input>
      <label>Transition</label>
      <input type="range" min="1" max="8" value={props.delay} onChange={(e) => {e.preventDefault(); props.setDelay(parseInt(e.target.value))}}></input>
      <label>Brightness</label>
      <input type="range" min="1" max="100" value={props.brightness} onChange={(e) => {e.preventDefault(); props.setBrightness(parseInt(e.target.value))}}></input>
    </StyledContainer>
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
    setDelay: (val) => dispatch(adjustDelayDuration(val)),
    setPresence: (val) => dispatch(adjustPresenceDuration(val)),
    setBrightness: (val) => dispatch(adjustBrightnessDuration(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundSettings);
