import React from "react";
import "./Initiation.style.scss";
import {Link} from "react-router-dom"
import {
  playerState, 
  saveUser1,
  saveUser2,
} from "../../state/playerinfo/playerinfo";
import { useSelector, useDispatch } from "react-redux";
const Initiation = () => {
  const player = useSelector(playerState);
  const dispatch = useDispatch();
  let player1 = player.player1;
  let player2 = player.player2;
  let difficulty = player.difficulty;

  const handledifficultyvalue = (event) => {};
  
  const handleplayername1 = (event) => {
    dispatch(saveUser1(event.target.value));
    console.log(player1);
  };
  const handleplayername2 = (event) => {
    dispatch(saveUser2(event.target.value));
    console.log(player2);
  };

  return (
    <div className="initiationforall">
      <p>choose your names: </p>
      <label>player1:</label>
      <input type="text" value={player1} onChange={handleplayername1} />
      <label>player2:</label>
      <input type="text" value={player2} onChange={handleplayername2} />
      <p>
        difficulty:
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
      <Link to={"/game"}>okay im ready</Link>
    </div>
  );
};

export default Initiation;
