import React from "react";

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';


import HistoryOfPastQueries from "../components/HistoryOfPastQueries.jsx";
import Query from "../components/Query.jsx";
import GraphQLResponse from "../components/GraphQLResponse.jsx";
import Schema from "../components/Schema.tsx";
import ApolloGraphQLCache from "../components/ApolloGraphQLCache.jsx";
import GraphQLVisualizer from '../components/GraphQLVisualizer.jsx';

import ChartComponent from "../components/ChartComponent.jsx";

/**
 * ************************************
 *
 * @module  ObserverCOntainers
 * @description
 *
 * ************************************
 */
const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  button: {
    marginLeft: '5px',
  },
}));

interface Props {
  name: string,
  attributes?: {id: string}

}

const ObserverContainers = (props)=> {

  const classes = useStyles({});

  return (
    <React.Fragment>
      <div id="observerContainers">
        <HistoryOfPastQueries queries={props.queries} isToggle={props.isToggle} history={props.history} />
        <Query queries={props.queries} historyBtn={props.historyBtn} />
        <GraphQLResponse results={props.results} historyBtn={props.historyBtn} />

      </div>
      {props.visualizerStatus ? <GraphQLVisualizer results={props.results} /> : null}
      {props.schemaStatus ? <Schema historyBtn={props.historyBtn} url={props.url} queries={props.queries} /> : null}
      {props.cacheStatus ? <ApolloGraphQLCache historyBtn={props.historyBtn} url={props.url} queries={props.queries} getCache={props.getCache} cache={props.cache} /> : null}
    </React.Fragment>
  );
};

export default ObserverContainers;