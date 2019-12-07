import React, {  useEffect , useState} from "react";
import TimeButton from './TimeButton.jsx'
// import  { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
//  import ActiveIndex from "./ActiveIndex.js"
import ChartComponent from "./ChartComponent.jsx";

const HistoryOfPastQueries = props => {
  //pseudostate
  // let state={}
  const[ activeIndex, setActiveIndex ]= useState(0);
  // state = { activeIndex: 0 }
  const[ index, setIndex ]= useState(0);

// useEffect=(()=>{

// },[])

// useEffect(() => {

// })

  // const handleClick = (e, titleProps) => {
  //   setIndex(titleProps)
  //   setActiveIndex(activeIndex)
  
  //   const newIndex = activeIndex === index ? -1 : index
  //   //  {pastQueries}
  //   setActiveIndex(newIndex)
  // }
  let results=[];
  let pastQueries = [];
  for (let i = 0; i < props.queries.length; i++) {
    // pastQueries.push(
    //   <div id="queryBox" onClick={() => props.isToggle(i)}>
    //     <div>Query {i + 1}</div>
    //     <TimeButton history={props.history} index = {i}/>
    //   </div>
    // );

    // console.log(props)
    // console.log("i elemenent",props.queries[i])
     results.push(
             <Accordion.Title
                active={activeIndex === i}
                index={i}
                onClick={(e, titleProps) => {
                  console.log('this is e', e);
                  console.log('this is titleprops',titleProps);
                  setIndex(titleProps)
                  setActiveIndex(activeIndex)
                
                  const newIndex = activeIndex === index ? -1 : index
                  //  {pastQueries}
                  // if(newIndex!==-1){
                    setActiveIndex(newIndex);
                  
                }}
              >
              
                Query {i+1}
                <Icon name='dropdown' />,

              </Accordion.Title>,
              <Accordion.Content active={activeIndex === i}>
               <div id="queryBox" onClick={() => props.isToggle(i)}>
                  <div>Query {i + 1}
                  <ChartComponent />  
                  </div>
                  <TimeButton history={props.history} index = {i}/>

                </div>
              </Accordion.Content>
     )

  };

  return (

    <div id="history-past-queries">
      <Accordion styled>
        {results}
      </Accordion>
    </div>

  );
};



export default HistoryOfPastQueries;