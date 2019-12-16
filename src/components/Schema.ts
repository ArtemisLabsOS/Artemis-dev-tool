import * as React from "react";
import ReactJson from "react-json-view";
import introspectionQuery from "../Utility/introspectionQuery.ts";

interface Props{
  url: string,
  queries: object[],
}
const Schema: React.FC<Props> = props => {
  const [schema, updateSchema] = React.useState({});

  React.useEffect(() => {
    graphQLFetcher(props.url, introspectionQuery);
  }, [props.queries.length])

  function graphQLFetcher(url:string, introspectionQuery: string) {
    console.log('this is url', url);
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
