import React, {  useEffect , useState} from "react";
import TimeButton from './TimeButton.jsx'
import { Accordion, Icon } from 'semantic-ui-react'
import Query from "./Query.jsx"
import Modal from 'react-modal';
import Collapsible from 'react-collapsible';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};


const HistoryOfPastQueries = props => {
  const[activeIndex,setActiveIndex]=useState(-1);

  let results=[];
  let pastQueries = [];
  //
  const uploadTime = [];
  //
  for (let i = 0; i < props.queries.length; i++) {
    let storage=props.queries[i]
    console.log(storage)
    pastQueries.push(
      <div id="queryBox" onClick={() => props.isToggle(i)}>
        <div>Query {i + 1}</div>
        <TimeButton history={props.history} index={i} uploadTime={uploadTime} />
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
        <div id="queryBox" onClick={() => this.props.isToggle(i)}>
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
          <Collapsible trigger="Node Summary" open="true">
            {sgmodal}
            <p>
              <span className="sidebar-title">Instance Type: </span>
              <span>{InstanceTypeDisplay}</span>
            </p>
            <p>
              <span className="sidebar-title">Instance ID: </span>
              <span>
                {InstanceIdDisplay}
              </span>
            </p>
            <p>
              <span className="sidebar-title">Instance Status: </span>
              <span>
                {InstanceStatusDisplay}
              </span>
            </p>
            {/* {sgDetails} */}
          </Collapsible>
          <Collapsible trigger="Node Details" open="true">
            <div id="main-info" className="node-info">
              <ReactJson src={nodeData} name={"Active Node"} indentWidth={reactJsonconfig.indentWidth} iconStyle={reactJsonconfig.iconStyle} displayObjectSize={reactJsonconfig.displayObjectSize} displayDataTypes={reactJsonconfig.displayDataTypes}/>
            </div>
          </Collapsible>
        </div>
    </div>

  );
}


export default HistoryOfPastQueries;