import React from "react";
import Query from "../components/Query.jsx";
import GraphQLResponse from "../components/GraphQLResponse.jsx";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const QueryContainer = props => {
  const arr = ["(num) => num + 1"];
  return (
    <div id="graphQLContainer">
      {/* <SyntaxHighlighter language="javascript" style={docco}>
        <Query index={i + 1} key={i} data={data} />
    </SyntaxHighlighter> */}
      {/* {arr.map((data, i) => (
        <SyntaxHighlighter language="javascript" style={docco}>
          <Query index={i + 1} key={i} data={data} />
        </SyntaxHighlighter>
      ))} */}
      <SyntaxHighlighter language="javascript" style={docco}>
        {arr.map((data, i) => (
          <Query index={i + 1} key={i} data={data} />
        ))}
      </SyntaxHighlighter>
      <GraphQLResponse log={props.res} />
    </div>
  );
};

export default QueryContainer;
