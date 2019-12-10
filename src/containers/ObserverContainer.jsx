import React, { useEffect, useState } from "react";
import HistoryOfPastQueries from "../components/HistoryOfPastQueries.jsx";
import Query from "../components/Query.jsx";
import GraphQLResponse from "../components/GraphQLResponse.jsx";
import Schema from "../components/Schema.jsx";
import ApolloGraphQLCache from "../components/ApolloGraphQLCache.jsx";
import VictoryBarUse from "../components/VictoryBar.jsx"
//<VictoryBarUse/>
// import "../stylesheets/style.scss";


const ObserverContainers = props => {



console.log("this context in observerContainers props is", props)

  // document.getElementById('accordion ui fluid styled').setAttribute("style","height:100px");

  return (
    <React.Fragment>
      
      <div  id="observerContainers" >
     
        <HistoryOfPastQueries queries={props.queries} isToggle={props.isToggle} history={props.history}/>
     <Query queries={props.queries} historyBtn={props.historyBtn} /> 
        <GraphQLResponse results={props.results} historyBtn={props.historyBtn} />
      
      </div>
      {props.schemaStatus ? <Schema historyBtn={props.historyBtn} url={props.url} queries={props.queries} /> : null}
      {props.cacheStatus ? <ApolloGraphQLCache historyBtn={props.historyBtn} url={props.url} queries={props.queries} getCache={props.getCache} cache={props.cache} /> : null}

    </React.Fragment>
  );
};

export default ObserverContainers;