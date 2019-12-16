import * as React from 'react'
import TimeButton from '../components/TimeButton'

interface Props{
  i: number;
  history: string[];
  isToggle: (i:number) => void;
}

const HistoryBox: React.FC<Props> = props => {
  return(
    <div id="queryBox" onClick={() => props.isToggle(props.i)}>
      <div>Query {props.i + 1}</div>
      <TimeButton timeStamp={{temp:"temp"}}history={props.history} index={props.i} />
    </div>
  )
}

export default HistoryBox;