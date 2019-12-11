import React from 'react';
import Dropdown from '../components/DropdownMenu.jsx';

import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

/**
 * ************************************
 *@module Headers
 * @description Functional component that displays tabs for the component list or file structure
 *
 * ************************************
 */
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
interface TabPanelProps {
  children?: React.ReactNode;
}
const Headers = (props) => {
  const classes = useStyles({});
 
  return (
    
    <React.Fragment>
  
      <div className="hOne">
        <h1>ARTEMIS</h1>
      </div>
      <div className="header-container">
        <Dropdown />
        <button className="header-item item4" onClick={() => props.visualizerToggle()}>
          VISUALIZER
        </button>
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