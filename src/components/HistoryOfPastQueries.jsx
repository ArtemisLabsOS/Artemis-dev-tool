import React from "react";
import Clock from "react-live-clock";

const HistoryOfPastQueries = props => {
  let pastQueries = [];
  for (let i = 0; i < props.queries.length; i++) {
    pastQueries.push(
      <div id="queryBox" onClick={() => props.isToggle(i)}>
        <div>Query {i + 1}</div>
        <div>
        <button className="time-button"><Clock format={"HH:mm:ss"} /></button>
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