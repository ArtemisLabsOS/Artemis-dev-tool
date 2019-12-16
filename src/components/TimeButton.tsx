import * as React from "react";
import msgToBackground from '../Utility/msgToBackground'

interface Props{
  timeStamp: any,
  history: string[],
  index: number,
}


const TimeButton:React.FC<Props> = props => {

  const [isHovered, setHovered] = React.useState(false);
  function toggleTime(index: number) {
    msgToBackground(
      "contentScript",
      "rerenderDOM",
      response => console.log(response),
      props.history[index]
    );

  }
  const hovered = isHovered ? 'Click Me!' : props.timeStamp.format('h:mm:ss');

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