import React from "react";
import ReactJson from "react-json-view";
import { SSL_OP_TLS_ROLLBACK_BUG } from "constants";

const Query = props => {
  let queriesList = [];
  if (props.queries) {
    for (let i = 0; i < props.queries.length; i++) {
      queriesList.push(
        <ReactJson theme="google"
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
      <div id="query-hThree">
        <h3>QUERY</h3>
      </div>
      <span>{queriesList[props.historyBtn]}</span>
    </div>
  );
};


//  theme={{
//   base00: "rgba(0, 0, 0, 0)",
//   base01: "white",
//   base02: "white",
//   base03: "white",
//   base04: "white",
//   base05: "white",
//   base06: "white",
//   base07: "white",
//   base08: "white",
//   base09: "orange", //string
//   base0A: "yellow", 
//   base0B: "lightgreen", //number
//   base0C: "white",
//   base0D: "white",
//   base0E: "white",
//   base0F: "white"
// }}
export default Query;
