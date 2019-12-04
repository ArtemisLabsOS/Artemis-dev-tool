import React, { useEffect, useState } from "react";
import ReactJson from "react-json-view";
// import CustomGraphiQL from "./GraphiQL.jsx";
import introspectionQuery from "../Utility/introspectionQuery.js";

const ApolloGraphQLCache = props => {
  const [cache, updateCache] = useState({});
  
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
        updateCache(resp.data)
      );
  }

  console.log('this is cache in cache container', cache);

  return (
    <div id="cache-container">
      <h2>Cache:</h2>
          <ReactJson
            src={cache}
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


export default ApolloGraphQLCache;