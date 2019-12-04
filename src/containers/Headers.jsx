import React, { useState, useEffect } from 'react';

const Headers = (props) => {
  // useEffect will trigger re-render when either schemaStatus OR cacheStatus gets updated
  // useEffect(() => {
    
  // },[schemaStatus, cacheStatus])

  return (
    <React.Fragment>
      <div>
        <h1>ARTEMIS</h1>
        <img></img>
      </div>
      <div>
        <div onClick={()=> props.schemaToggle()}>
          SCHEMA
        </div>
        <div onClick={()=> props.cacheToggle()}>
          CACHE
        </div>
      </div>
    </React.Fragment>
  )
}

export default Headers;