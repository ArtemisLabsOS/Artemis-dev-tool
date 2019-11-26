import React from "react";
import Query from "../components/Query.jsx";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import GraphQLResponse from "../components/GraphQLResponse.jsx";
import ReactJson from "react-json-view";

const QueryContainer = props => {
  const arr = [1, 2, 3, 4];
  return (
    <div id="graphQLContainer">
      <div>
        {props.queries.map((data, i) => (
          <SyntaxHighlighter language="javascript" style={docco}>
            <Query index={i + 1} key={i} data={data.outgoingQueries} />
          </SyntaxHighlighter>
        ))}
        {/* {arr.map((data, i) => (
          <Query index={i + 1} key={i} data={data} />
        ))} */}
      </div>
      <GraphQLResponse log={props.res} />
    </div>
  );
};

export default QueryContainer;
