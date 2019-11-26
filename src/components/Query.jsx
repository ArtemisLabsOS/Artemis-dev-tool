import React from "react";
import bglog from "./utils/bglog.js";

const Query = props => {
  return (
    <div>
      <div>Query {props.index}</div>
      <div>{props.data}</div>
    </div>
  );
};

export default Query;