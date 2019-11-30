import React from "react";

const HistoryOfPastQueries = props => {
    let arr1 = [];
    for (let i=props.queries.length-1; i>=0; i--){
      arr1.push(<div onClick={()=>props.isToggle(i)}>Query {i+1}</div>)
    }
  return (
    <div>
      {arr1}
    </div>
  );
};

export default HistoryOfPastQueries;