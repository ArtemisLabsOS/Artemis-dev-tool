import * as React from 'react'
import { Accordion } from 'semantic-ui-react'
import TimeButton from '../components/TimeButton'

interface Props{
  timeStamp: any,
  history: string[],
  activeIndex: number,
  i: number
  isToggle:(i:number)=> void;
  setActiveIndex:(i:number) => void;
}

const HistoryBox:React.FC<Props> = props => {
  return (
    <React.Fragment> 
      <Accordion.Title
        active={props.activeIndex === props.i}
        index={props.i}
        onClick={() => {
          const newIndex = props.activeIndex === props.i ? -1 : props.i
          props.setActiveIndex(newIndex); 
        }}
      >
        <div id="queryBox" onClick={() => props.isToggle(props.i)}>
          <div>Query {props.i + 1}</div> 
          <TimeButton timeStamp={props.timeStamp} history={props.history} index = {props.i}/>
        </div>
      </Accordion.Title>
      <Accordion.Content active={props.activeIndex === props.i}>
        <p>Performance</p> 
      </Accordion.Content>  
    </React.Fragment>
  )
}

export default HistoryBox;