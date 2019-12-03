import React from "react";
import ReactJson from "react-json-view";
import CustomGraphiQL from "./GraphiQL.jsx";
import introspectionQuery from "../Utility/introspectionQuery.js";

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
      <button
        onClick={() => {
          graphQLFetcher(props.url, introspectionQuery);
        }}
      >
        Test Button
      </button>
      <CustomGraphiQL editorTheme="solarized light" fetcher={graphQLFetcher} />
      {/* <span>{schemaList[props.historyBtn]}</span> */}
    </div>
  );
};

function graphQLFetcher(url, introspectionQuery) {
  return fetch(url, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: introspectionQuery })
  })
    .then(response => response.json())
    .then(resp =>
      console.log("this is the fetched result for introspection", resp)
    );
}

export default Schema;
