import React, {useEffect} from "react";
import Clock from "react-live-clock";

var moment = require('moment');
moment().format();

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

const HistoryOfPastQueries = props => {

  function toggleTime(index){
    msgToBackground(
      "contentScript",
      "rerenderDOM",
      response => console.log(response),
      props.history[index]
    );
  }

  let pastQueries = [];
  for (let i = 0; i < props.queries.length; i++) {
    console.log(i);
    pastQueries.push(
      <div id="queryBox" onClick={() => props.isToggle(i)}>
        <div>Query {i + 1}</div>
        <div>
        <button className="time-button" onClick={()=>toggleTime(i)} onMouseOver={() => console.log('hello')}><Clock format={"HH:mm:ss"} /></button>
        </div>
      </div>
    );
  }

  // let x = new moment().format("h:mm:ss");
  // for (let i = 0; i < pastQueries.length; i++) {
  // timeTracker.push(<span><Clock format={'HH:mm:ss'}/></span>);
  // if (time.length === 0){
  //     time.push(x);
  // }else{
  //     time.push(moment.duration(new moment(time[0]).diff(new moment(time[time.length - 1]))))
  // }
  // }
  return (
    <div id="history-past-queries">
      {pastQueries}
      {/* <Moment pastQueries={pastQueries}/> */}
    </div>
  );
};



export default HistoryOfPastQueries;