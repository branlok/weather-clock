import React, {useState, useEffect} from "react";
import { StyledContainerBg } from "../../styles/StyledSettings";
import {
  adjustDelayDuration,
  adjustBrightnessDuration,
  adjustPresenceDuration,
  setNumberOfImages,
  setRelevance,
  setImageQuality,
  setKeyword,
  setModified,
} from "../../store/settings/settingsActions";
import { connect } from "react-redux";

function BackgroundSettings(props) {
    let [keyword, setKeyword] = useState("");
    let [originalSettings, setOriginalSettings] = useState([props.relevance, props.imageQuality, props.numOfImages, props.keyword]);

    useEffect(() => {
        let currentChanges = [props.relevance, props.imageQuality, props.numOfImages, props.keyword];
        let modified = currentChanges.filter((setting) => !originalSettings.includes(setting)); //if even one changes, it will return it.

        if (modified.length > 0) { 
            console.log(modified)
            props.setFetchreq(true)
        } else {
            console.log("modified")
            console.log([props.relevance, props.imageQuality, props.numOfImages, props.keyword] )
            props.setFetchreq(false)
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // DOM appraoch
        // const [input] = e.target.elements
        // const userKeyword = input.value;

        props.setKeyword(keyword);
        setKeyword("");
    }
  return (
    <StyledContainerBg>
    <h2>Animation</h2>
      <label>Presence<output>{props.presence}s</output></label> 
      <input className="slider" type="range" min="1" max="60" value={props.presence} onChange={(e) => {props.setPresence(parseInt(e.target.value))}}></input>
      <label>Transition<output>{props.delay}s</output></label>
      <input className="slider" type="range" min="1" max="8" value={props.delay} onChange={(e) => {props.setDelay(parseInt(e.target.value))}}></input>
      <label>Max Brightness<output>{props.brightness}</output></label>
      <input className="slider" type="range" min="1" max="100" value={props.brightness} onChange={(e) => { props.setBrightness(parseInt(e.target.value))}}></input>
      <h2>Images</h2>
      <label>Relevance</label>
      <div className="radio-container">
        <input className="radio" type="radio" value="weather" name="relevance" onChange={(e) => {props.setRelevance(e.target.value)}} checked={props.relevance === "weather"}/> Weather Conditions
        <input className="radio" type="radio" value="time" name="relevance" onChange={(e) => {props.setRelevance(e.target.value)}} checked={props.relevance === "time"} /> Time of Day
        <input className="radio" type="radio" value="topic" name="relevance" onChange={(e) => {props.setRelevance(e.target.value)}}  checked={props.relevance === "topic"} /> Custom
        {props.relevance === "topic" && <form onSubmit={handleSubmit}>{props.keyword ? <output>{props.keyword}</output> : <input className="text" pattern="[A-Za-z]{1,18}" minLength="1" placeholder={"1 - 18 chars - no space"} required value={keyword} onChange={(e) => setKeyword(e.target.value)} disabled={props.keyword && true}></input> } <button type="submit">{props.keyword ? "Reset" : "Save"}</button></form>}
   
      </div>
      <label>Image Quality</label>
      <div className="radio-container">
        <input className="radio" type="radio" value="optimized" name="quality" onChange={(e) => {props.setImageQuality(e.target.value)}} checked={props.imageQuality === "optimized"} /> Optimized
        <input className="radio" type="radio" value="lowest" name="quality"  onChange={(e) => {props.setImageQuality(e.target.value)}}  checked={props.imageQuality === "lowest"} /> Low
        <input className="radio" type="radio" value="highest" name="quality"   onChange={(e) => {props.setImageQuality(e.target.value)}} checked={props.imageQuality === "highest"} /> Highest
      </div>
      <label>Number of Images <output>{props.numOfImages}</output></label>
      <input className="slider" type="range" min="2" max="20" value={props.numOfImages} onChange={(e) => {e.preventDefault(); props.setNumberOfImages(parseInt(e.target.value))}} ></input>
    </StyledContainerBg>
  );
}

const mapStateToProps = (state) => {
  return {
    delay: state.settings.delay,
    presence: state.settings.presence,
    brightness: state.settings.brightness,
    relevance: state.settings.relevance,
    imageQuality: state.settings.imageQuality,
    numOfImages: state.settings.numOfImages,
    keyword: state.settings.keyword,
  };
};

//step 2
const mapDispatchToProps = (dispatch) => {
  return {
    setDelay: (val) => dispatch(adjustDelayDuration(val)),
    setPresence: (val) => dispatch(adjustPresenceDuration(val)),
    setBrightness: (val) => dispatch(adjustBrightnessDuration(val)),
    setRelevance: (val) => dispatch(setRelevance(val)),
    setKeyword: (val) => dispatch(setKeyword(val)),
    setImageQuality: (val) => dispatch(setImageQuality(val)),
    setNumberOfImages: (val) => dispatch(setNumberOfImages(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundSettings);
