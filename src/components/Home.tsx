import React from 'react';


const Home :React.FC=()=> {

    return (
        <div id='home-component'>
            <h1>ARTEMIS</h1>
            <p>GraphQL query has not been detected yet.</p>
            <div className="loader">Loading...</div>
        </div>
    )
}

export default Home;