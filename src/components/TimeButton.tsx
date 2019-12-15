import * as React from "react";
import msgToBackground from '../Utility/msgToBackground'
var Moment = require('moment');
let currentTime = new Moment();

interface Props{
  history: string[],
  index: number,
}


const TimeButton:React.FC<Props> = props => {
  React.useEffect(() => {
    currentTime = new Moment();
  }, []);
  const [isHovered, setHovered] = React.useState(false);
  function toggleTime(index: number) {
    msgToBackground(
      "contentScript",
      "rerenderDOM",
      response => console.log(response),
      props.history[index]
    );

  }
  const hovered = isHovered ? 'Click Me!' : currentTime.format('h:mm:ss');

  return (
    <div>
      <button className="time-button"
        onClick={() => toggleTime(props.index)}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}>
        {hovered}
      </button>
    </div>
  );
};

export default TimeButton;