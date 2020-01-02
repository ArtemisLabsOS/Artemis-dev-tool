import * as React from "react";
import ReactJson from "react-json-view";
import introspectionQuery from "../Utility/introspectionQuery";

interface Props {
  url: string,
  queries: object[],
}
const Schema: React.FC<Props> = ({ url, queries }) => {
  const [schema, updateSchema] = React.useState({});

  React.useEffect(() => {
    console.log(queries.length);
    graphQLFetcher(url, introspectionQuery);
  }, [queries.length])

  function graphQLFetcher(url: string, introspectionQuery: string) {
    return fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: introspectionQuery })
    })
      .then(response => response.json())
      .then(resp => {
        console.log('this is data', resp.data);
        updateSchema(resp.data);
      });
  }

  return (
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
  );
};

export default Schema;
