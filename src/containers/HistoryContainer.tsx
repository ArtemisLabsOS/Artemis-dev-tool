import * as React from "react";
import HistoryBox from '../components/HistoryBox'

export interface IHistoryOfPastQueries {
  timeStamps: object[],
  isToggle: (i: number) => void;
  history: string[];
  queries: object[];
}

const HistoryContainer: React.FC<IHistoryOfPastQueries> = props => {
  const [activeIndex, setActiveIndex] = React.useState<number>(-1);
  let results:any[]  = [];
  for (let i = 0; i < props.queries.length; i++) {
    results.push(
      <HistoryBox key = {i} timeStamp={props.timeStamps[i]} activeIndex={activeIndex} setActiveIndex={setActiveIndex} history={props.history} i ={i} isToggle={props.isToggle}/>
    )
  };
  return (
    <div id="history-past-queries">
      {results}
    </div>
  );
}


export default HistoryContainer;