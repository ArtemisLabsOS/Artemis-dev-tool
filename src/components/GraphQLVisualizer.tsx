import * as React from 'react';
import Tree from 'react-d3-tree';

interface IVisualizer {
  results: string[],
}

const traverse = (obj: any) => {
  if (typeof obj !== 'object') {
    return [{ name: obj }];
  }
  const array:any[] = [];
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const tempObj = {} as any;
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

const GraphQLVisualizer: React.FC<IVisualizer> = props => {
  const data = traverse(JSON.parse(props.results[0]));
  if (data === undefined) {
    return (
      <div id="visualizer-container">
        <div>
          <h3>VISUALIZER</h3>
        </div>
        <div id="treeWrapper">
          hello
        </div>
      </div>
    )
  } else {
    return (
      <div id="visualizer-container">
        <div>
          <h3>VISUALIZER</h3>
        </div>
        <div id="treeWrapper">
          <Tree data={data} nodeSvgShape={svgSquare} />
        </div>
      </div>
    )
  }
}

export default GraphQLVisualizer;