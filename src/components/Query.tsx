import * as React  from "react";
import ReactJson from "react-json-view";

interface iQuery{
    queries: object[],
    historyBtn: number,
}
const Query: React.FC<iQuery> = props => {

  let queriesList = [];
  if (props.queries) {
    for (let i = 0; i < props.queries.length; i++) {
      queriesList.push(
        <ReactJson theme="google"
          src={JSON.parse(JSON.stringify(props.queries[i]))}
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
    <div id="query-container">
      <div id="query-hThree">
        <h3>QUERY</h3>
      </div>
      <span>{queriesList[props.historyBtn]}</span>
    </div>
  );



};

export default Query;