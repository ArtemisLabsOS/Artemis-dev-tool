import React from 'react';
import Query from '../components/Query.jsx'

const QueryContainer = props => {
    
    return (
        <div>
            <Query />
            <button onClick={()=>{console.log('clicked')}}>++</button>
        </div>
    )
}

export default QueryContainer;