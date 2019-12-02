import React from 'react';
import HistoryOfPastQueries from '../components/HistoryOfPastQueries.jsx';

const HistoryOfPastQueriesContainer = props => {
    return (
        <div id='history-past-container'>
            <HistoryOfPastQueries queries={props.queries} isToggle={props.isToggle}/>
        </div>
    )
}

export default HistoryOfPastQueriesContainer;