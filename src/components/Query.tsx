import * as React from "react";
// import ReactJson from "react-json-view";
import { GraphqlCodeBlock } from 'graphql-syntax-highlighter-react';

export interface iQuery {
  queries: any[],
  historyBtn: number,
}
const Query: React.FC<iQuery> = ({ queries, historyBtn }) => {
  if (queries.length !== 0 && historyBtn > -1 && historyBtn < queries.length)
    console.log('query', queries[historyBtn].outgoingQueries.variables);
  return (
    <div id="query-container">
      <div id="query-hThree">
        <h3>QUERY</h3>
      </div>
      {/* <span>
      {queries.length !== 0 && historyBtn > -1 && historyBtn < queries.length ?
        <ReactJson theme="google"
          src={JSON.parse(JSON.stringify(queries[historyBtn].outgoingQueries.variables))}
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
        {queries.length !== 0 && historyBtn > -1 && historyBtn < queries.length ?
          <GraphqlCodeBlock
            className="graphQlQuery"
            queryBody={queries[historyBtn].outgoingQueries.query}
          />
          : null
        }
      </span>
    </div>
  )
};

export default Query;