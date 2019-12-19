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
  "shape": "circle",
  "shapeProps": {
    "r": 40
  },
  "Translate X": 443.075,
  "Translate Y": 410.5,
  "Initial Depth": 1,
  "Scale Extent": {
    "Min": 0.1,
    "Max": 1,
  },
  "Node size": {
    "X": 152,
    "Y": 156,
  },
  "Node seperation": {
    "Siblings": 1,
    "Non-Siblings": 0
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
          <Tree data={data} nodeSvgShape={svgSquare} orientation="vertical" zoom={.4} separation={{ siblings: 0, nonSiblings: 1 }} nodeSize={{ x: 250, y: 150 }} circleRadius={28} translate={{ x: 250, y: 200 }} textLayout={{ x: -25, y: 0 }} shouldCollapseNeighborNodes={true} useCollapseData={true} collapsible={true} transitionDuration={0} />
        </div>
      </div>
    )
  }
}

export default GraphQLVisualizer;