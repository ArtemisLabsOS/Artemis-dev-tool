import * as React from "react";
import HistoryBox from '../components/HistoryBox'

export interface IHistoryOfPastQueries {
  timeStamps: object[],
  isToggle: (i: number) => void;
  history: string[];
  queries: object[];
}

const HistoryContainer: React.FC<IHistoryOfPastQueries> = ({ timeStamps, queries, isToggle, history }) => {
  const [activeIndex, setActiveIndex] = React.useState<number>(-1);
  let results: any[] = [];
  for (let i = 0; i < queries.length; i++) {
    results.push(
      <HistoryBox key={i} timeStamp={timeStamps[i]} activeIndex={activeIndex} setActiveIndex={setActiveIndex} history={history} i={i} isToggle={isToggle} />
    )
  };
  return (
    <div id="history-past-queries">
      {results}
    </div>
  );
}


export default HistoryContainer;