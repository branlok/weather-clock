import React, {useEffect, useState} from "react";
import { StyledContainerInter } from "../../styles/StyledSettings";
import {
  adjustDelayDuration,
  adjustBrightnessDuration,
  adjustPresenceDuration,
  setCoordinates,
  setWeather,
  setNotes,
} from "../../store/settings/settingsActions";
import LoaderSVG from '../../styles/svg/loading-svgrepo-com.svg'
import {setSeconds, setFormat24 } from '../../store/settings/settingsActions'
import { connect } from "react-redux";


function InterfaceSettings(props) {

    let [loader, setLoader] = useState(false);

    let getPosition = () => {
        return new Promise(function (resolve, reject) {
          navigator.geolocation.getCurrentPosition(resolve, reject, {enableHighAccuracy: true});
        });
      }

    useEffect(() => {
        if (props.weather && !props.latitude) {
            async function getLocation() {
                setLoader(true);
                props.setWeather(false);
                let geolocationData = await getPosition()
                let latitude = await geolocationData.coords.latitude;
                let longitude = await geolocationData.coords.longitude;
                props.setCoordinates(latitude, longitude);
                if (!geolocationData) {
                    console.log(geolocationData, "what")
                    props.setWeather(false);
                }
                setLoader(false);
                props.setWeather(true);
            }
            getLocation();
            // props.setWeather(true);
        }
    }, [props.weather])


    return (    
        <StyledContainerInter loader={loader}>
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
            <h2>Pin Notes</h2>
            <div className="switch-container">
                    <label> Enable </label>
                    <label className="switch">
                    <input type="checkbox" onChange={(e) => props.setNotes(!props.notes)} checked={props.notes}/>
                    <span className="slider2"></span>
                    </label>
            </div>
            <h2>Weather</h2>
            <div className="switch-container">
                    <label> Enable </label>
                    <label className="switch">
                    <div className="loader">Getting Location</div>
                    <input type="checkbox" onChange={(e) => props.setWeather(!props.weather)} checked={props.weather}/>
                    <span className="slider2"></span>
                    </label>
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
      weather: state.settings.weather,
      notes: state.settings.notes,
      geolocation: state.settings.geolocation,
      latitude: state.settings.latitude,
      longitude: state.settings.longitude,
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
      setCoordinates: (lat, long) => dispatch(setCoordinates(lat, long)),
      setWeather: (val) => dispatch(setWeather(val)),
      setNotes: (val) => dispatch(setNotes(val)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(InterfaceSettings);
