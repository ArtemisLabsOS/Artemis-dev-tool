import * as React from "react";
import ReactJson from "react-json-view";

interface IResponse {
  results: string[],
  historyBtn: number,
}

const GraphQLResponse: React.FC<IResponse> = props => {
  let responseArr = [];
  if (props.results) {
    for (let i = 0; i < props.results.length; i++) {
      responseArr.push(
        <ReactJson theme="google"
          src={JSON.parse(props.results[i])}
          name={null}
          iconStyle="triangle"
          indentWidth={1}
          collapsed={false}
          enableClipboard={false}
          displayDataTypes={false}
          displayObjectSize={false}
        />
      );
    }
  }
  
  return (
    <div id="response-container">
      <div id="response-hThree">
        <h3 className="graphql-heading">RESPONSE</h3>
      </div>
      <span className="graphql-response">{responseArr[props.historyBtn]}</span>
    </div>
  );
};

export default GraphQLResponse;
