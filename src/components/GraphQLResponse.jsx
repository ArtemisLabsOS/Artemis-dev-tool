import React from "react";
import ReactJson from "react-json-view";

const GraphQLResponse = props => {
  let responseArr = [];
  if (props.results) {
    for (let i = 0; i < props.results.length; i++) {
      responseArr.push(
        <ReactJson theme="summerfruit:inverted"
          src={JSON.parse(props.results[i])}
          name={null}
          iconStyle="triangle"
          indentWidth={1}
          collapsed={3}
          enableClipboard={false}
          displayDataTypes={false}
          displayObjectSize={false}
        />
      );
    }
  }
  
  return (
    <div id="response-container">
      <h2 className="graphql-heading">RESPONSE:</h2>
      <span className="graphql-response">{responseArr[props.historyBtn]}</span>
    </div>
  );
};

export default GraphQLResponse;
