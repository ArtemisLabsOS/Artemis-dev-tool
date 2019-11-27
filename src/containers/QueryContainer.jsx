import React from "react";
import Query from "../components/Query.jsx";
import GraphQLResponse from "../components/GraphQLResponse.jsx";
const QueryContainer = props => {

  return (
    <div id="graphQLContainer">
      <Query queries ={props.queries}/>
      <GraphQLResponse results={props.results} />
    </div>
  );
};

export default QueryContainer;
