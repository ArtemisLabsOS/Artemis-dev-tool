import React, { useEffect, useState } from "react";
import ReactJson from "react-json-view";
// import CustomGraphiQL from "./GraphiQL.jsx";
import introspectionQuery from "../Utility/introspectionQuery.js";

const Schema = props => {
  const [schema, updateSchema] = useState({});
  
  useEffect(() => {
    graphQLFetcher(props.url, introspectionQuery);
  }, [props.queries])
  
  function graphQLFetcher(url, introspectionQuery) {
    return fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: introspectionQuery })
    })
      .then(response => response.json())
      .then(resp =>
        updateSchema(resp.data)
      );
  }

  console.log('this is schema in schema container', schema);

  return (
    <div id="schema-container">
      <h2>Schema:</h2>
          <ReactJson theme="summerfruit:inverted"
            src={schema}
            name={null}
            iconStyle="triangle"
            indentWidth={1}
            collapsed={3}
            enableClipboard={false}
            displayDataTypes={false}
            displayObjectSize={false}
          />
    </div>
  );
};



export default Schema;
