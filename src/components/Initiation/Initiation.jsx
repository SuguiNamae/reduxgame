import React from "react";
import "./Initiation.style.scss";
const Initiation = () => {
  return (
    <div className="initiationforall">
      <p>choose your names: </p>
      <label>player1:</label>
      <input type="text" />
      <label>player2:</label>
      <input type="text" />
      <p>difficulty:</p>
      <input type="radio" name="difficultyinput" value="easy" />
      <input type="radio" name="difficultyinput" value="medium" />
      <input type="radio" name="difficultyinput" value="hard" />
      <button>okay im ready</button>
    </div>
  );
};

export default Initiation;
