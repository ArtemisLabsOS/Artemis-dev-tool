import React from "react";
import Query from "../components/Query.jsx";

const QueryContainer = props => {
  const arr = ['a','b'];
  return (
    <div>
      {arr.map((data, i) => (
        <Query index={i + 1} key={i} data={data} />
      ))}
    </div>
  );
};

export default QueryContainer;
