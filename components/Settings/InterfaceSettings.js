import React from "react";
import { StyledContainerInter } from "../../styles/StyledSettings";
import {
  adjustDelayDuration,
  adjustBrightnessDuration,
  adjustPresenceDuration,
} from "../../store/settings/settingsActions";
import { connect } from "react-redux";


function InterfaceSettings() {
    return (    
        <StyledContainerInter>
            <h2>Clock</h2>
            <div className="switch-container">
                    <label> Show Seconds </label>
                    <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider2"></span>
                    </label>
            </div>
            <label> Clock Size </label>
            <div className="radio-container">
            <input className="radio" type="radio" value="Weather" name="gender" /> Mini
            <input className="radio" type="radio" value="Time of Day" name="gender" /> Normal
            <input className="radio" type="radio" value="Random" name="gender" /> Large
            </div>
        </StyledContainerInter>
    )
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(InterfaceSettings);
