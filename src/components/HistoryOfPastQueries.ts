import * as React from "react";
import TimeButton from './TimeButton'
import { Accordion, Icon } from 'semantic-ui-react'
import Collapsible from 'react-collapsible';

interface iHistoryOfPastQueries{
  isToggle:(i:number)=> void;
  history: string[];
  queries: object[];
}
const HistoryOfPastQueries: React.FC<iHistoryOfPastQueries> = props => {
  const[activeIndex,setActiveIndex]= React.useState<number>(-1);

  let results=[];
  let pastQueries= [];
  for (let i = 0; i < props.queries.length; i++) {
    let storage=props.queries[i]
    console.log(storage)
    pastQueries.push(
      <div id="queryBox" onClick={() => props.isToggle(i)}>
        <div>Query {i + 1}</div>
        <TimeButton history={props.history} index={i} />
      </div>
    );
    results.push(
      <Accordion.Title
        active={activeIndex === i}
        index={i}
        onClick={(e, titleProps) => {
          console.log('this is e', e);
          console.log('this is titleprops',titleProps);
          console.log("this is active index", activeIndex)

          const newIndex = activeIndex === i ? -1 : i
    
          setActiveIndex(newIndex);
          
        }}
      >
        <Icon name='dropdown' />
        <div id="queryBox" onClick={() => props.isToggle(i)}>
          <div>Query {i + 1}</div> 
          <TimeButton history={props.history} index = {i}/>
        </div>
      </Accordion.Title>,
      <Accordion.Content active={activeIndex === i}>
       <p>Performance</p> 
      </Accordion.Content>  

    )
  };
  

  return (
    <div id="history-past-queries">
      <Accordion fluid styled>
        {results}
      </Accordion>

      <div id="details-wrapper">
          <Collapsible trigger="Node Summary" open={true}>
            
            <p>
              <span className="sidebar-title">Instance Type: </span>
            
            </p>
            <p>
              <span className="sidebar-title">Instance ID: </span>
              <span>
        
              </span>
            </p>
            <p>
              <span className="sidebar-title">Instance Status: </span>
              <span>
          
              </span>
            </p>
          </Collapsible>
          <Collapsible trigger="Node Details" open={true}>
            <div id="main-info" className="node-info">
            </div>
          </Collapsible>
        </div>
    </div>

  );
}


export default HistoryOfPastQueries;