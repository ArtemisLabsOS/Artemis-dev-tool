import React from 'react';
import Dropdown from '../components/DropdownMenu.jsx';
import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

const Headers = (props) => {

  return (
    <React.Fragment>
      <div className="hOne">
        <h1>ARTEMIS</h1>
      </div>
      <div className="header-container">
        <Dropdown/>
        <button className="header-item item2" onClick={()=> props.schemaToggle()}>
          SCHEMA
        </button>
        <button className="header-item item3" onClick={()=> props.cacheToggle()}>
          CACHE
        </button>
      </div>
    </React.Fragment>
  )
}

export default Headers;