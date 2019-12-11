import React, { useEffect, useState } from "react";
import Clock from "react-live-clock";
import msgToBackground from '../Utility/msgToBackground.js'
var Moment = require('moment');
let currentTime = new Moment();

const TimeButton = props => {
  useEffect(() => {
    currentTime = new Moment();
  }, []);
  const [isHovered, setHovered] = useState(false);
  function toggleTime(index) {
    msgToBackground(
      "contentScript",
      "rerenderDOM",
      response => console.log(response),
      props.history[index]
    );

  }
  const hovered = isHovered ? 'Click Me!' : currentTime.format('h:mm:ss');

  return (
    <div>
      <button className="time-button"
        onClick={() => toggleTime(props.index)}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}>
        {/* {isHovered ? 'click Me!' : { uploadTime[props.index]}} */}
        {hovered}
      </button>
    </div>
  );
};

export default TimeButton;