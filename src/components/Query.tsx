import * as React from "react";
// import ReactJson from "react-json-view";
import { GraphqlCodeBlock } from 'graphql-syntax-highlighter-react';

export interface iQuery {
  queries: any[],
  historyBtn: number,
}
const Query: React.FC<iQuery> = props => {
  if(props.queries.length !== 0 && props.historyBtn > -1 && props.historyBtn < props.queries.length)
    console.log('query', props.queries[props.historyBtn].outgoingQueries.variables);
  return (
  <div id="query-container">
    <div id="query-hThree">
      <h3>QUERY</h3>
    </div>
    {/* <span>
      {props.queries.length !== 0 && props.historyBtn > -1 && props.historyBtn < props.queries.length ?
        <ReactJson theme="google"
          src={JSON.parse(JSON.stringify(props.queries[props.historyBtn].outgoingQueries.variables))}
          name={null}
          iconStyle="triangle"
          indentWidth={1}
          collapsed={3}
          enableClipboard={false}
          displayDataTypes={false}
          displayObjectSize={false}
        /> : null
      }
    </span> */}
    <span>
      {props.queries.length !== 0 && props.historyBtn > -1 && props.historyBtn < props.queries.length ?
        <GraphqlCodeBlock
        className="GraphqlCodeBlock"
        queryBody={props.queries[props.historyBtn].outgoingQueries.query}
        /> 
        : null
      }
    </span>
  </div>
)
      };

export default Query;