import React from 'react';
import Dropdown from '../components/DropdownMenu.jsx';
import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
// import "../stylesheets/style.scss";

import ButtonInverted from '../components/ButtonInverted'

const Headers = (props) => {

  return (
    <React.Fragment>
      <div className="hOne">
        <h1>ARTEMIS</h1>
      </div>
      <div className="header-container">
        <Dropdown/>
        {/* <ButtonInverted schemaToggle={props.schemaToggle} cacheToggle={props.cacheToggle}/> */}
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