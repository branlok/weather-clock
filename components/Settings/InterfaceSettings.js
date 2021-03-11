import React from "react";
import { StyledContainerInter } from "../../styles/StyledSettings";
import {
  adjustDelayDuration,
  adjustBrightnessDuration,
  adjustPresenceDuration,
} from "../../store/settings/settingsActions";
import {setSeconds, setFormat24} from '../../store/settings/settingsActions'
import { connect } from "react-redux";


function InterfaceSettings(props) {
    return (    
        <StyledContainerInter>
            <h2>Clock</h2>
            <div className="switch-container">
                    <label> Show Seconds </label>
                    <label className="switch">
                    <input type="checkbox" onChange={(e) => props.setSeconds(!props.secondsVisible)} checked={props.secondsVisible}/>
                    <span className="slider2"></span>
                    </label>
            </div>
            <div className="switch-container">
                    <label> 24 Hour Format </label>
                    <label className="switch">
                    <input type="checkbox" onChange={(e) => props.setFormat24(!props.format24Hr)} checked={props.format24Hr}/>
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
      format24Hr: state.settings.format24Hr,
      secondsVisible: state.settings.secondsVisible,
    };
  };
  
  //step 2
  const mapDispatchToProps = (dispatch) => {
    return {
      setDelay: (val) => dispatch(adjustDelayDuration(val)),
      setPresence: (val) => dispatch(adjustPresenceDuration(val)),
      setBrightness: (val) => dispatch(adjustBrightnessDuration(val)),
      setFormat24: (val) => dispatch(setFormat24(val)),
      setSeconds: (val) => dispatch(setSeconds(val)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(InterfaceSettings);
