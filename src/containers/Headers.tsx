import React, { Fragment } from 'react';
import Dropdown from '../components/DropdownMenu.jsx';

interface IHeaders {
    visualizerToggle: () => void,
    schemaToggle: () => void,
    cacheToggle: () => void,
}
const Headers: React.FC<IHeaders> = props => {

    return (
        <Fragment>
            <div className='hOne'>
                <h1>ARTEMIS</h1>
            </div>
            <div className='header-container'>
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
        </Fragment>
    )
}

export default Headers;
