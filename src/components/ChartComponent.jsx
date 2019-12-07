import React from 'react';
import {VictoryChart, VictoryBar, VictoryLabel, VictoryAxis} from 'victory';


const ChartComponent =(props) => {
  const xLabel = props.state ? `${props.state} emissions over 30 years`
  : `sample state emissions ${props.year}`;
     return (
       <div className='chart'>
        <VictoryChart
          height={400} width={400}
          domainPadding={{x: 40, y: 40}}
          scale={{ y: "linear" }}
          style={{ height: 50, width: 50}}
          size={10}
        >
          <VictoryBar
          categories={{ x: props.categories}}
          labels={(d) => d.y}
          style={{ data: { fill: "#c43a31" }} }
          labelComponent={<VictoryLabel dy={10} />}
          data={props.coords}
          />
          <VictoryAxis
            label={ xLabel }
            style={{
              axisLabel: { padding: 30 }
            }}
          />
           <VictoryAxis dependentAxis
            label="million metric tons CO2"
            style={{
              axisLabel: { padding: 38 }
            }}
          />
        </VictoryChart>
      </div>
    );
};

export default ChartComponent;