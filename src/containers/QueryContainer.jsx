import React from "react";
import Query from "../components/Query.jsx";
import GraphQLResponse from "../components/GraphQLResponse.jsx"
// import "./QueryContainer.css"
const QueryContainer = (props) => {
  return (
    <div id="graphQLContainer">
      {props.queries.map((data, i) => (
        <Query index={i + 1} key={i} data={data} />

      ))}
     <GraphQLResponse log={props.res} />

    </div>
  );
};

export default QueryContainer;
