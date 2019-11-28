import React from 'react';
import GraphQLResponse from '../components/GraphQLResponse.jsx'

const ResponseContainer = (props) => {
    return (
        <div>
            <GraphQLResponse results={props.results}/>
        </div>
    );
};

export default ResponseContainer;