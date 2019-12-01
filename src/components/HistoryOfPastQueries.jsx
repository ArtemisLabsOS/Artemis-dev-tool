import React, { useEffect } from "react";
//
import Clock from 'react-live-clock';
// import Moment from './Moment.jsx';
const moment = require("moment");
moment().format();
//
const HistoryOfPastQueries = props => {
    let pastQueries = [];
    let timeTracker = [];
    
    for (let i=props.queries.length-1; i>=0; i--){
      pastQueries.push(<div onClick={()=>props.isToggle(i)}>Query {i+1}</div>)}

    //
  //   const time = [];
  //   console.log('this is time outside', time)
    
    let x = new moment().format("h:mm:ss");
    for (let i = 0; i < pastQueries.length; i++) {
      console.log('this is time', timeTracker)
    timeTracker.push(<div><Clock format={'HH:mm:ss'}/></div>);
    // if (time.length === 0){
    //     time.push(x);
    // }else{
    //     time.push(moment.duration(new moment(time[0]).diff(new moment(time[time.length - 1]))))
    // }
  }
    //
    return (
    <div>
      {pastQueries}
      {/* {time} */}
      {/* <Moment pastQueries={pastQueries}/> */}

      {/* {timeTracker.length <= 1 ? timeTracker[0] : } */}
      {timeTracker}
      {/* <=1 ? timeTracker[0] : timeTracker[timeTracker.length-1] - timeTracker[0]} */}
    </div>
  );
};

export default HistoryOfPastQueries;