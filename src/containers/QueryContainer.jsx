import React from "react";
import Query from "../components/Query.jsx";
import bglog from "../bglog";

const QueryContainer = props => {
  return (
    <div>
      {props.queries.map((data, i) => (
        <Query index={i + 1} key={i} data={data} />
      ))}
    </div>
  );
};

export default QueryContainer;
