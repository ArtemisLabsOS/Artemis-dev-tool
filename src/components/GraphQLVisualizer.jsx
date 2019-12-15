import React from 'react';
import Tree from 'react-d3-tree';
import "../stylesheets/style.scss";

const traverse = (obj) => {
    if (typeof obj !== 'object') {
        return [{ name: obj }];
    }
    const array = [];
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        const tempObj = {};
        tempObj.name = keys[i];
        tempObj.children = traverse(obj[keys[i]]);
        array.push(tempObj);
    }
    return array;
}

const svgSquare = {
    shape: 'rect',
    shapeProps: {
        width: 0,
        height: 0,
        x: -10,
        y: -10,
    }
}

const GraphQLVisualizer = props => {
    // console.log('this is props.result', props.results)
    const data = traverse(JSON.parse(props.results[0]));
    return (
        <div id="visualizer-container">
            <div id="text">
                <h3>VISUALIZER</h3>
            </div>
            <div id="treeWrapper">

                <Tree id="tree" data={data} nodeSvgShape={svgSquare} />

            </div>
        </div>
    )
}

export default GraphQLVisualizer;