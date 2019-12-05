import React from 'react';
import Dropdown from '../components/DropdownMenu.jsx';
import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

const Headers = (props) => {
  // const [showButton, setShowButton] = useState(true);
  // const [showMessage, setShowMessage] = useState(false);

  return (
    <React.Fragment>
      <div className="hOne">
        <h1>ARTEMIS</h1>
        <img></img>
      </div>
      <div className="header-container">
        <Dropdown/>
        {/* <Container> */}
        {/* <button className="header-item item2" onClick={()=> {
          props.schemaToggle();
          setShowMessage(true);
          }
          }> */}
        <button className="header-item item2" onClick={()=> props.schemaToggle()}>
          SCHEMA
        </button>
        <button className="header-item item3" onClick={()=> props.cacheToggle()}>
          CACHE
        </button>
        {/* </Container> */}
      </div>
    </React.Fragment>
  )
}

export default Headers;