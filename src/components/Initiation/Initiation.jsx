import React from "react";
import { useState } from "react";
import "./Initiation.style.scss";
const Initiation = () => {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [difficultyvalue, setdifficultyvalue] = useState("");
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
  return (
    <div className="initiationforall">
      <p>choose your names: </p>
      <label>player1:</label>
      <input type="text" value={inputValue1} onChange={handleInputChange1} />
      <label>player2:</label>
      <input type="text" value={inputValue2} onChange={handleInputChange2} />
      <p>difficulty:</p>
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
      <button type="submit">okay im ready</button>
    </div>
  );
};

export default Initiation;
