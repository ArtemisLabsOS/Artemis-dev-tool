import React from "react";

const moment = require("moment");
moment().format();

const Moment = props => {
  const time = [];
  let x = new moment().format("h:mm:ss");
  //   let y = new moment()
  for (let i = 0; i < props.pastQueries.length; i++) {
    // time.push(<div>{x}</div>);
    if (time.length <= 1){
        time.push(x);
    }else{
        time.push(moment.duration(new moment(time[0]).diff(new moment(time[time.length - 1]))))
    }
  }

  //   let duration = moment.duration(time[0].diff(time[time.length-1]))
  return (
    <div>
    {time}
      {/* {time.length <= 1
        ? time[0]
        : moment.duration(new moment(time[0]).diff(new moment(time[time.length - 1])))} */}
    </div>
  );
};

export default Moment;
