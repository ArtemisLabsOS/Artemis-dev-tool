import * as React from 'react';
import Dropdown from '../components/DropdownMenu';
// import SelectCreatable, { CreatableProps } from 'react-select/lib/Creatable';
// import SelectReadOnly from 'react-select';
// // import { getStyles } from './SelectDropdownStyles';

// import 'normalize.css/normalize.css'
// import '@blueprintjs/core/dist/blueprint.css'
import Button from "../components/Button"
interface IHeaders {
  visualizerToggle: () => void,
  schemaToggle: () => void,
  cacheToggle: () => void,
}



const Headers: React.FC<IHeaders> = (props) => {

  return (
    <React.Fragment>
  
      <nav className="pt-navbar">

        <div className="pt-navbar-group pt-align-left"> 
            <div className="pt-navbar-heading"> Upload File</div>
            <input className="pt-input" placeholder="Search Query Id.." type="text" />
        </div>



      </nav>
      <div className="hOne">
        <h1>ARTEMIS</h1>
      </div>
      <div className="header-container">
        <Dropdown />
        <Button className="header-item item4" onClick={() => props.visualizerToggle()}>
          VISUALIZER
        </Button>
        <button className="header-item item2" onClick={() => props.schemaToggle()}>
          SCHEMA
        </button>
        <button className="header-item item3" onClick={() => props.cacheToggle()}>
          CACHE
        </button>
      </div>
    </React.Fragment>
  )
}

export default Headers;