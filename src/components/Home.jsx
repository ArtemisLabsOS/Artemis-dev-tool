import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Home = () => {
    return (
        <div id='home-component'>
            <h1>ARTEMIS</h1>
            <p>GraphQL query has not been detected yet.</p>
            <div class="loader">Loading...</div>
        </div>
    )
}

export default Home;