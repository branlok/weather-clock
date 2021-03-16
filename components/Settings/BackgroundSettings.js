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
  setQueue,
  setFormat24,
  setSeconds,
} from "../../store/settings/settingsActions";
import { connect } from "react-redux";


function BackgroundSettings(props) {
    let [keyword, setKeyword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        props.setQueue("keyword", keyword);
        setKeyword("");
    }
  return (
    <StyledContainerBg location={props.geolocation}>
    <h2>Animation</h2>
      <label>Presence<output>{props.presence/1000}s</output></label> 
      <input className="slider" type="range" min="1" max="60" value={props.presence/1000} onChange={(e) => {props.setPresence(parseInt(e.target.value * 1000))}}></input>
      <label>Transition<output>{props.delay/1000}s</output></label>
      <input className="slider" type="range" min="1" max="8" value={props.delay/1000} onChange={(e) => {props.setDelay(parseInt(e.target.value * 1000))}}></input>
      <label>Dim Background<output>{props.brightness}</output></label>
      <input className="slider" type="range" min="0" max="100" value={props.brightness} onChange={(e) => { props.setBrightness(parseInt(e.target.value))}}></input>
      <h2>Images</h2>
      <label>Relevance</label>
      <div className="radio-container">
        <input disabled className="radio weather" type="radio" value="weather" name="relevance" onChange={(e) => {props.setQueue("relevance", e.target.value)}} checked={props.queueChanges.relevance === "weather"}/> Weather Conditions
        <input className="radio" type="radio" value="time" name="relevance" onChange={(e) => {props.setQueue("relevance", e.target.value)}} checked={props.queueChanges.relevance === "time"} /> Time of Day
        <input className="radio" type="radio" value="topic" name="relevance" onChange={(e) => {props.setQueue("relevance", e.target.value)}}  checked={props.queueChanges.relevance === "topic"} /> Custom
        {props.queueChanges.relevance === "topic" && <form onSubmit={handleSubmit}>{props.queueChanges.keyword ? <output>{props.queueChanges.keyword}</output> : <input className="text" pattern="[A-Za-z]{1,18}" minLength="1" placeholder={"1 - 18 chars - no space"} required value={keyword} onChange={(e) => setKeyword(e.target.value)} disabled={props.queueChanges.keyword && true}></input> } <button type="submit">{props.queueChanges.keyword ? "Reset" : "Save"}</button></form>}
   
      </div>
      <label>Image Quality</label>
      <div className="radio-container">
        <input className="radio" type="radio" value="optimized" name="quality" onChange={(e) => {props.setQueue("imageQuality", e.target.value)}} checked={props.queueChanges.imageQuality === "optimized"} /> Optimized
        <input className="radio" type="radio" value="lowest" name="quality"  onChange={(e) => {props.setQueue("imageQuality", e.target.value)}}  checked={props.queueChanges.imageQuality === "lowest"} /> Low
        <input className="radio" type="radio" value="highest" name="quality"   onChange={(e) => {props.setQueue("imageQuality", e.target.value)}} checked={props.queueChanges.imageQuality === "highest"} /> Highest
      </div>
      <label>Number of Images <output>{props.queueChanges.numOfImages}</output></label>
      <input className="slider" type="range" min="2" max="20" value={props.queueChanges.numOfImages} onChange={(e) => {e.preventDefault(); props.setQueue("numOfImages", parseInt(e.target.value))}} ></input>
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
    queueChanges: state.settings.queueChanges,
    geolocation: state.settings.geolocation,
  };
};

//step 2
const mapDispatchToProps = (dispatch) => {
  return {
    setDelay: (val) => dispatch(adjustDelayDuration(val)),
    setPresence: (val) => dispatch(adjustPresenceDuration(val)),
    setBrightness: (val) => dispatch(adjustBrightnessDuration(val)),
    //TO QUEUE
    setQueue: (type, val) => dispatch(setQueue(type, val)),
    setRelevance: (val) => dispatch(setRelevance(val)),
    setKeyword: (val) => dispatch(setKeyword(val)),
    setImageQuality: (val) => dispatch(setImageQuality(val)),
    setNumberOfImages: (val) => dispatch(setNumberOfImages(val)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundSettings);
