import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

function Clock(props) {
  const [time, setTime] = useState(new Date());

  const format = props.format24Hr ? "h23" : "h12"
  const secondsVisible = props.secondsVisible ? {second:'2-digit'} : {}

  function tick() {
    setTime(new Date());
  }

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  return <div className="time">{time.toLocaleTimeString([], {hourCycle: format, hour: '2-digit', minute:'2-digit', ...secondsVisible})}</div>;
}

const mapStateToProps = (state) => {
    return {
        format24Hr: state.settings.format24Hr,
        secondsVisible: state.settings.secondsVisible
    };
  };



export default connect(mapStateToProps)(Clock);