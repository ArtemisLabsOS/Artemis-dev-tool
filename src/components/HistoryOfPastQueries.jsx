import React, {useEffect} from "react";
import Clock from "react-live-clock";

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
  };

  return (
    <div id="history-past-queries">
      {pastQueries}
    </div>
  );
};



export default HistoryOfPastQueries;