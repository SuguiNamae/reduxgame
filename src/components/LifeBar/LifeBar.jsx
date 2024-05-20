import React from "react";
import "./LifeBar.style.scss";
import { playerState} from "../../state/playerinfo/playerinfo";
import { useSelector } from "react-redux";

const LifeBar = (props) => {
  const barWidth = `${props.number}%`;
  const playername = useSelector(playerState);

  return (
    <div
      className="bar"
      style={{ width: barWidth, backgroundColor: props.bgcolor }}>
        <span className="usersname">{playername.player1}</span>
      <span className="number">{props.number > 0 ? props.number : 0}</span>
    </div>
  );
};

export default LifeBar;
