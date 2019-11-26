import React from "react";

const Query = props => {
  return (
    <div>
      <div>Query {props.index}</div>
      <div>{props.data}</div>
    </div>
  );
};

export default Query;
