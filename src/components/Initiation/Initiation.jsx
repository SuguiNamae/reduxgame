import React from "react";
import "./Initiation.style.scss";
import {Link} from "react-router-dom"
import {
  playerState, 
  saveUser1,
} from "../../state/playerinfo/playerinfo";
import { useSelector, useDispatch } from "react-redux";
const Initiation = () => {
  const player = useSelector(playerState);
  const dispatch = useDispatch();
  let player1 = player.player1;

  
  const handleplayername1 = (event) => {
    dispatch(saveUser1(event.target.value));
  };


  return (
    <div className="initiationforall">
      <p>choose your names: </p>
      <label>player1:</label>
      <input type="text" value={player1} onChange={handleplayername1} />
      <Link to={"/game"}>okay im ready</Link>
    </div>
  );
};

export default Initiation;
