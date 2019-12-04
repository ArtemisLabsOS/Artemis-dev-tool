import React, { useEffect } from "react";
import ReactJson from "react-json-view";

const ApolloGraphQLCache = props => {
  useEffect(() => {
    props.getCache()
  }, [props.queries])

  return (
    <div id="cache-container">
      <h2>Cache:</h2>
      <ReactJson
        src={props.cache}
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