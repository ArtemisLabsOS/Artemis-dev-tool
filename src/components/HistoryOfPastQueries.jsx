import React from "react";
import Clock from "react-live-clock";
// import Moment from './Moment.jsx';

const moment = require("moment");
moment().format();

const HistoryOfPastQueries = props => {
  let pastQueries = [];
  // for (let i=props.queries.length-1; i>=0; i--){
  for (let i = 0; i < props.queries.length; i++) {
    pastQueries.push(
      <div id="queryBox">
        <div onClick={() => props.isToggle(i)}>Query {i + 1}</div>
        <div>
          <Clock format={"HH:mm:ss"} />
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
