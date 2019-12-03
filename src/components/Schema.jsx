import React from "react";
import ReactJson from "react-json-view";

const Schema = props => {
  let schemaList = [];
  if (props.results) {
    for (let i = 0; i < props.results.length; i++) {
      schemaList.push(
        <ReactJson
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
    <div id="schema-container">
      <h2>Schema:</h2>
      <span>{schemaList[props.historyBtn]}</span>
    </div>
  );
};

export default Schema;
