import React, { useState } from 'react';
import GraphQLResponse from '../components/GraphQLResponse.jsx'

const ResponseContainer = (props) => {
    return (
        <div>
            <GraphQLResponse results={props.results} historyBtn={props.historyBtn}/>
        </div>
    );
};

export default ResponseContainer;