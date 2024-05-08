import React from "react";
import "./Intro.style.scss";
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
const Intro = () => {
  return <div className="introforall">
    <button className="introicon"><MenuIcon /></button>
    <p className="introtitle">welcom dear player</p>
    <p className="intromanintxt">you can click <button>here</button> if you dont know how to play the game.<br/> otherwise click play and enjoy</p>
    <Link to={"/initgame"}>play now</Link>
  </div>;
};

export default Intro;
