import * as React from 'react'
import { Accordion } from 'semantic-ui-react'
import TimeButton from '../components/TimeButton'

interface Props {
  key: number,
  timeStamp: any,
  history: string[],
  activeIndex: number,
  i: number
  isToggle: (i: number) => void,
  setActiveIndex: (i: number) => void;
}

const HistoryBox: React.FC<Props> = ({ timeStamp, activeIndex, setActiveIndex, history, i, isToggle }) => {
  return (
    <React.Fragment>
      <Accordion.Title
        active={activeIndex === i}
        index={i}
        onClick={() => {
          const newIndex = activeIndex === i ? -1 : i
          setActiveIndex(newIndex);
        }}
      >
        <div id="queryBox" onClick={() => isToggle(i)}>
          <div>Query {i + 1}</div>
          <TimeButton timeStamp={timeStamp} history={history} index={i} />
        </div>
      </Accordion.Title>
      <Accordion.Content active={activeIndex === i}>
        <p>Performance</p>
      </Accordion.Content>
    </React.Fragment>
  )
}

export default HistoryBox;