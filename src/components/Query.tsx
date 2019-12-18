import * as React from "react";
import ReactJson from "react-json-view";

export interface iQuery {
  queries: object[],
  historyBtn: number,
}
const Query: React.FC<iQuery> = props => (
  <div id="query-container">
    <div id="query-hThree">
      <h3>QUERY</h3>
    </div>
    <span>
      {props.queries.length !== 0 && props.historyBtn > -1 && props.historyBtn < props.queries.length ?
        <ReactJson theme="google"
          src={JSON.parse(JSON.stringify(props.queries[props.historyBtn]))}
          name={null}
          iconStyle="triangle"
          indentWidth={1}
          collapsed={3}
          enableClipboard={false}
          displayDataTypes={false}
          displayObjectSize={false}
        /> : null
      }
    </span>
  </div>
);

export default Query;