import React from "react";
import "./NotFound.style.scss"
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="fornotfound">
      <span className="forspan">
        sorry but the page you asked for does not exist here <br />
      </span>
      <Link to={"/"}>go back home</Link>
    </div>
  );
};

export default NotFound;
