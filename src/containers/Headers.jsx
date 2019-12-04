import React, { useState, useEffect } from 'react';

const Headers = (props) => {
  // useEffect will trigger re-render when either schemaStatus OR cacheStatus gets updated
  // useEffect(() => {
    
  // },[schemaStatus, cacheStatus])

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