import React, { useEffect } from "react";
import TimeButton from './TimeButton.jsx';
import Clock from "react-live-clock";


const HistoryOfPastQueries = props => {
  let pastQueries = [];
  //
  const uploadTime = [];
  //
  for (let i = 0; i < props.queries.length; i++) {
    pastQueries.push(
      <div id="queryBox" onClick={() => props.isToggle(i)}>
        <div>Query {i + 1}</div>
        <TimeButton history={props.history} index={i} uploadTime={uploadTime} />
      </div>
    );
    //
    uploadTime.push(<div><Clock format={'HH:mm:ss'} /></div>)
    //
  };
  return (
    <div id="history-past-queries">
      {pastQueries}
    </div>
  );
};

export default HistoryOfPastQueries;