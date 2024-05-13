import React from "react";
import "./LifeBar.style.scss";

const LifeBar = (props) => {
  const barWidth = `${props.number}%`;

  return (
    <div
      className="bar"
      style={{ width: barWidth, backgroundColor: props.bgcolor }}
    >
      <span className="number">{props.number>0?props.number:0}</span>
    </div>
  );
};

export default LifeBar;
