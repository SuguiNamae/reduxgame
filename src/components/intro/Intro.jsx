import React from "react";
import "./Intro.style.scss";
import { Link } from "react-router-dom";
const Intro = () => {
  return (
    <div className="introforall">
      <p className="introtitle">welcom dear player</p>
      <p className="intromanintxt">
        you can click{" "}
        <Link className="forlink" to={"/tuturial"}>
          here
        </Link>{" "}
        if you dont know how to play the game.
        <br /> otherwise click play and enjoy
      </p>
      <Link className="forlink" to={"/initgame"}>
        play now
      </Link>
    </div>
  );
};

export default Intro;
