import React from 'react';
import ReactJson from 'react-json-view';
import bglog from "../bglog";
const GraphQLResponse = (props) => {

  return (
    <div id='graphql-res'>
      <h2 className='graphql-heading'>Response:</h2>
      <span className='graphql-span'>
        <ReactJson
          src={props.res}
          name={null}
          iconStyle='triangle'
          indentWidth={1}
          collapsed={3}
          enableClipboard={false}
          displayDataTypes={false}
          displayObjectSize={false}
        />
      </span>
    </div>
  )
}

export default GraphQLResponse;