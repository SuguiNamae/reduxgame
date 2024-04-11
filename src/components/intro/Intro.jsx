import React from "react";
import "./Intro.style.scss";
const Intro = () => {
  return <div className="introforall">
    <p className="introtitle">welcom dear player</p>
    <p className="intromanintxt">you can click <button>here</button> if you dont know how to play the game.<br/> otherwise click play and enjoy</p>
    <button>play now</button>
  </div>;
};

export default Intro;
