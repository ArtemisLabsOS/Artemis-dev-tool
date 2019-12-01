import React, { useState, useEffect } from "react";
import Query from "../components/Query.jsx";
import HistoryOfPastQueries from '../components/HistoryOfPastQueries.jsx'

const QueryContainer = props => {
  // const [historyBtn, historyBtnToggle] = useState(0);
  // function isToggle(index) {
  //   historyBtnToggle(index)
  // }

  // useEffect(()=>{
  //   historyBtnToggle(props.queries.length-1);
  // },[props.queries]);

  return (
    <div id="graphQLContainer">
    {/* query should have index, istoggle props */}
      <Query id='query' queries={props.queries} historyBtn={props.historyBtn}/>
      <HistoryOfPastQueries queries={props.queries} isToggle={props.isToggle}/>
    </div>
  );
};

export default QueryContainer;