import React from 'react';

const Headers = (props) => {
  return (
    <React.Fragment>
      <div className="hOne">
        <h1>ARTEMIS</h1>
        <img></img>
      </div>
      <div className="header-container">
        <button className="header-item item1" onClick={()=> props.schemaToggle()}>
          SCHEMA
        </button>
        <button className="header-item" onClick={()=> props.cacheToggle()}>
          CACHE
        </button>
      </div>
    </React.Fragment>
  )
}

export default Headers;