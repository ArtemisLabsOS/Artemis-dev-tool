import React from "react";
import ReactJson from "react-json-view";

const Query = props => {
  let queriesList = [];
  if (props.queries) {
    for (let i = 0; i < props.queries.length; i++) {
      queriesList.push(
        <ReactJson theme="summerfruit:inverted"
          src={JSON.parse(JSON.stringify(props.queries[i]))}
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
    <div id="query-container">
      <h2>Query:</h2>
      <span>{queriesList[props.historyBtn]}</span>
    </div>
  );
};

export default Query;
