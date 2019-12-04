import React from 'react';

const Headers = (props) => {
  return (
    <React.Fragment>
      <div>
        <h1>ARTEMIS</h1>
      </div>
      <div id='schema-cache-button'>
        <div onClick={() => props.schemaToggle()}>
          SCHEMA
        </div>
        <div onClick={() => props.cacheToggle()}>
          CACHE
        </div>
      </div>
    </React.Fragment>
  )
}

export default Headers;