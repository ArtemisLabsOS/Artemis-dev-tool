import React, { useEffect, useState } from "react";
import ReactJson from "react-json-view";
import introspectionQuery from "../Utility/introspectionQuery.js";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

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

  return (
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}>
      <div id="schema-container">
        <div id="schema-hThree">
          <h3>SCHEMA</h3>
        </div>
        <div id='schema-data'>
          <ReactJson theme="google"
            src={schema}
            name={null}
            iconStyle="triangle"
            indentWidth={1}
            collapsed={false}
            enableClipboard={false}
            displayDataTypes={false}
            displayObjectSize={false}
          />
        </div>
      </div>
    </ReactCSSTransitionGroup>
  );
};

export default Schema;
