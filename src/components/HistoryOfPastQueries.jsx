import React from "react";
import Clock from "react-live-clock";

const HistoryOfPastQueries = props => {
  let pastQueries = [];
  for (let i = 0; i < props.queries.length; i++) {
    pastQueries.push(
      <div id="queryBox">
        <div onClick={() => props.isToggle(i)}>Query {i + 1}</div>
        <div>
          <Clock format={"HH:mm:ss"} />
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