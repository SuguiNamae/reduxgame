import React from "react";
import "./train.style.scss"
import { Link } from "react-router-dom";

const Train = () => {
  return (
    <div className="trainforall">
      <span className="firstspan">
        you have four keys in total for moving across the page
        <br />
      </span>
      <span className="secondspan">
        press <strong>W</strong> key for moving up <br />
        press <strong>S</strong> key for moving down
        <br />
        press <strong>A</strong> key for moving left
        <br />
        press <strong>D</strong> key for moving right
        <br />
      </span>
      <span className="thirdspan">
        press the space key to start the game.<br /> the ball will be shot after 3
        seconds . try your best to not hit the ball.<br /> good luck
      </span>
      <Link className="forendlink" to={"/initgame"}>play</Link>
    </div>
  );
};

export default Train;
