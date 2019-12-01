import React, { useEffect } from "react";
import Clock from 'react-live-clock';
// import Moment from './Moment.jsx';

const moment = require("moment");
moment().format();

const HistoryOfPastQueries = props => {
    let pastQueries = [];
    let timeTracker = [];
    
    // for (let i=props.queries.length-1; i>=0; i--){
      for (let i=0; i<props.queries.length; i++){
      pastQueries.push(<div onClick={()=>props.isToggle(i)}>Query {i+1}</div>)}
 
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
    return (
    <div>
      {pastQueries}
      {/* <Moment pastQueries={pastQueries}/> */}
      {timeTracker}
    </div>
  );
};

export default HistoryOfPastQueries;