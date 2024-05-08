import React, { useState } from "react";
import "./Temporary.style.scss";

const Temporary = () => {
  const [angleValue, setangleValue] = useState("");
  const [powerValue, setpowerValue] = useState("");
  let turnbased = 0

  const handleInputChange1 = (event) => {
    setangleValue(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setpowerValue(event.target.value);
  };

  const shootbal = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const player1 = {
      width: canvas.width*1/10,
      height: canvas.height*1/10,
      x: canvas.width / 20,
      y: canvas.height*6 / 7,
      color: "blue",
    };

    const player2 = {
      width: canvas.width*1/10,
      height: canvas.height*1/10,
      x: (canvas.width * 17.1) / 20,
      y: (canvas.height * 6) / 7,
      color: "green",
    };

    function drawPlayers() {
      ctx.fillStyle = player1.color;
      ctx.fillRect(player1.x, player1.y, player1.width, player1.height);
      ctx.fillStyle = player2.color;
      ctx.fillRect(player2.x, player2.y, player2.width, player2.height);
    }

    function updateplayers(event) {
      if (turnbased%2 === 0) {
        switch (event.key) {
          case "ArrowLeft":
            player1.x -= 5;
            break;
          case "ArrowRight":
            player1.x += 5;
            break;
          default:
            break;
        }
        drawPlayers();
      }
      else if (turnbased%2 !== 0) {
        switch (event.key) {
          case "ArrowLeft":
            player2.x -= 5;
            break;
          case "ArrowRight":
            player2.x += 5;
            break;
          default:
            break;
        }
        drawPlayers();
      }

      turnbased +=1
    }

    function animatep() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawPlayers();
      document.addEventListener("keydown", updateplayers);
      requestAnimationFrame(animatep);
    }

    animatep();
  };

  return (
    <div className="mainforall">
      <canvas id="myCanvas"></canvas>
      <div className="buttontempo">
        <input
          type="number"
          placeholder="enter your angle"
          value={angleValue}
          onChange={handleInputChange1}
        />
        <input
          type="number"
          placeholder="enter your power"
          value={powerValue}
          onChange={handleInputChange2}
        />
        <button onClick={shootbal}>shoot</button>
      </div>
    </div>
  );
};

export default Temporary;
