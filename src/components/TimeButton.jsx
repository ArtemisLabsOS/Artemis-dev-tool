import React, { useEffect, useState } from "react";
import Clock from "react-live-clock";
var Moment = require('moment');
const currentTime = new Moment();

const msgToBackground = function (type, msg, callback, newBody) {
  if (chrome && chrome.runtime) {
    chrome.runtime.sendMessage(
      {
        type,
        msg,
        newBody
      },
      function (response) {
        callback(response);
      }
    );
  }
};

const TimeButton = props => {
  const [isHovered, setHovered] = useState(false);
  function toggleTime(index) {
    msgToBackground(
      "contentScript",
      "rerenderDOM",
      response => console.log(response),
      props.history[index]
    );

  }
  const hovered = isHovered ? 'Click Me!' : props.uploadTime[props.index]

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