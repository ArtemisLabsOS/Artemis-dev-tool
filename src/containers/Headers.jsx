import React from 'react';

const Headers = (props) => {
  return (
    <React.Fragment>
      <div className="hOne">
        <h1>ARTEMIS</h1>
        <img></img>
      </div>
      <div className="spotify-container">
        <button className="spotify" onClick={()=> props.schemaToggle()}>
          SCHEMA
        </button>
        <button className="spotify" onClick={()=> props.cacheToggle()}>
          CACHE
        </button>
      </div>
    </React.Fragment>
  )
}

export default Headers;