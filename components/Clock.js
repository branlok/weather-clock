import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  function tick() {
    setTime(new Date());
  }

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  return <div className="time">{time.toLocaleTimeString()}</div>;
}

export default Clock;
