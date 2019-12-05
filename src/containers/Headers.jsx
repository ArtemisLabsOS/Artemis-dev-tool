import React from 'react';
import { DropdownMenu } from 'semantic-ui-react';
import Dropdown from '../components/DropdownMenu.jsx';

const Headers = (props) => {
  return (
    <React.Fragment>
      <div className="hOne">
        <h1>ARTEMIS</h1>
        <img></img>
      </div>
      <div className="spotify-container">
        <Dropdown />
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