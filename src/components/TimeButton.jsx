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
  function toggleTime(index){
    msgToBackground(
      "contentScript",
      "rerenderDOM",
      response => console.log(response),
      props.history[index]
    );
  }
  
  return (
    <div>
      <button className="time-button" 
        onClick={()=>toggleTime(props.index)} 
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}>
        {isHovered ? <p>click Me!</p>: <p>{currentTime.format("h:mm:ss")}</p>}
      </button>
    </div>
  );
};

export default TimeButton;