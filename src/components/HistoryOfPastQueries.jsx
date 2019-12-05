import React, {useEffect} from "react";
import TimeButton from './TimeButton.jsx'



const HistoryOfPastQueries = props => {
  let pastQueries = [];
  for (let i = 0; i < props.queries.length; i++) {
    pastQueries.push(
      <div id="queryBox" onClick={() => props.isToggle(i)}>
        <div>Query {i + 1}</div>
        <TimeButton history={props.history} index = {i}/>
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