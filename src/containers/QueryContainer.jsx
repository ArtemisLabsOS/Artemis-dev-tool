import React from "react";
import Query from "../components/Query.jsx";
import bglog from "../bglog";

const QueryContainer = props => {
  const arr = [100, 1, 2, 3, 4];
  return (
    <div>
      {arr.map((data, i) => (
        <Query index={i + 1} key={i} data={data} />
      ))}
      {/* <Query data={arr[0]}/> */}
    </div>
  );
};

export default QueryContainer;
