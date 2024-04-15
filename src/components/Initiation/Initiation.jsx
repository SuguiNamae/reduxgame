import React from "react";
import { useState } from "react";
import "./Initiation.style.scss";
import {
  playerState,
  saveUser1,
  saveUser2,
} from "../../state/playerinfo/playerinfo";
import { useSelector, useDispatch } from "react-redux";
const Initiation = () => {
  const player = useSelector(playerState);
  const dispatch = useDispatch();
  console.log(player);
  let player1;
  let player2;
  const handledifficultyvalue = (event) => {};

  const handleInputChange1 = (event) => {};
  const handleInputChange2 = (event) => {};

  return (
    <div className="initiationforall">
      <p>choose your names: </p>
      <label>player1:</label>
      <input type="text" value={player1} onChange={handleInputChange1} />
      <label>player2:</label>
      <input type="text" value={player2} onChange={handleInputChange2} />
      <p>
        difficulty: {player1} and {player2}
      </p>
      <input
        type="radio"
        name="difficultyinput"
        value="easy"
        onClick={handledifficultyvalue}
      />
      <input
        type="radio"
        name="difficultyinput"
        value="medium"
        onClick={handledifficultyvalue}
      />
      <input
        type="radio"
        name="difficultyinput"
        value="hard"
        onClick={handledifficultyvalue}
      />
      <button>okay im ready</button>
    </div>
  );
};

export default Initiation;
