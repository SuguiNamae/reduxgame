import React from "react";
import { useState } from "react";
import "./Initiation.style.scss";
import { saveUser1, saveUser2 } from "../../state/playerinfo/playerinfo";
import { useSelector, useDispatch } from "react-redux";
const Initiation = () => {

  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [difficultyvalue, setdifficultyvalue] = useState("");
  const playr1 = useSelector((state) => state.player1);
  const playr2 = useSelector((state) => state.player2);
  const dispatch = useDispatch()

  const handledifficultyvalue = (event) => {
    setdifficultyvalue(event.target.value);
    console.log(difficultyvalue)
  };

  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
    console.log(inputValue1);
  };
  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
    console.log(inputValue2);
  };
  const handlesubmit = (inputValue1, inputValue2)=>{
    dispatch(saveUser1(inputValue1))
    dispatch(saveUser2(inputValue2))

    
    console.log(playr1, typeof(playr2));
// ,llllll,l,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  }
  return (
    <div className="initiationforall">
      <p>choose your names: </p>
      <label>player1:</label>
      <input type="text" value={inputValue1} onChange={handleInputChange1} />
      <label>player2:</label>
      <input type="text" value={inputValue2} onChange={handleInputChange2} />
      <p>difficulty: {playr1} and {playr2}</p>
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
      <button  onClick={handlesubmit}>okay im ready</button>
    </div>
  );
};

export default Initiation;
