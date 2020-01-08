import * as React from 'react'
import TimeButton from '../components/TimeButton'

interface Props {
  i: number;
  history: string[];
  isToggle: (i: number) => void;
}

const HistoryBox: React.FC<Props> = ({ isToggle, i, history }) => {
  return (
    <div id="queryBox" onClick={() => isToggle(i)}>
      <div>Query {i + 1}</div>
      <TimeButton timeStamp={{ temp: "temp" }} history={history} index={i} />
    </div>
  )
}

export default HistoryBox;