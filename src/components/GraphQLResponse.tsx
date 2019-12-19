import * as React from "react";
import ReactJson from "react-json-view";

interface IResponse {
  results: string[],
  historyBtn: number,
}

const GraphQLResponse: React.FC<IResponse> = props => {
  return (
    <div id="response-container">
      <div id="response-hThree">
        <h3 className="graphql-heading">RESPONSE</h3>
      </div>
      <span className="graphql-response">
        {props.results.length !== 0 && props.historyBtn < props.results.length && props.historyBtn > -1 ?
          <ReactJson theme="google"
            src={JSON.parse(props.results[props.historyBtn])}
            name={null}
            iconStyle="triangle"
            indentWidth={1}
            collapsed={false}
            enableClipboard={false}
            displayDataTypes={false}
            displayObjectSize={false}
          /> : null
        }
      </span>
    </div>
  );
};

export default GraphQLResponse;
