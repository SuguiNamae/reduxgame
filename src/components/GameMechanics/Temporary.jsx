import React, { useState } from "react";
import "./Temporary.style.scss";
const Temporary = () => {
  const [angleValue, setangleValue] = useState("");
  const [powerValue, setpowerValue] = useState("");
  const handleInputChange1 = (event) => {
    setangleValue(event.target.value);
  };
  const handleInputChange2 = (event) => {
    setpowerValue(event.target.value);
  };

  const shootbal = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "red";
    let angle = (angleValue * Math.PI) / 180;
    let power = powerValue * 0.1;
    let player1 = {
      width: 50,
      height: 30,
      x: canvas.width / 8,
      y: canvas.height / 7,
      color: undefined,
    };
    let player2 = {
      width: 50,
      height: 30,
      x: (canvas.width * 7) / 8,
      y: (canvas.height * 6) / 7,
      color: undefined,
    };
    function drawPlayers() {
      ctx.fillStyle = "blue";
      ctx.fillRect(player1.x, player1.y, player1.width, player1.height);
      ctx.fillStyle = "green";
      ctx.fillRect(player2.x, player2.y, player2.width, player2.height);
    }
    function updateplayers(event) {
      console.log(event.key);
      // switch (event.key) {
      //   case "ArrowUp":
      //     player1.y -= 10;
      //     break;
      //   case "ArrowDown":
      //     player1.y += 10;
      //     break;
      //   case "ArrowLeft":
      //     player1.x -= 10;
      //     break;
      //   case "ArrowRight":
      //     player1.x += 10;
      //     break;
      // }
      drawPlayers();
    }

    function animatep() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawPlayers();
      updateplayers();
      document.addEventListener("keydown", updateplayers);
      requestAnimationFrame(animatep);
    }
    animatep()

    let projectile = {
      x: canvas.width / 10,
      y: (7 * canvas.height) / 8,
      radius: 3,
      color: "red",
      velocity: {
        x: Math.cos(angle) * power,
        y: Math.sin(angle) * power,
      },
      gravity: 0.2, // Gravity value
      weight: 0.5, // Weight of the ball
      isFalling: false, // Flag to indicate if the projectile is falling
    };

    function drawProjectile() {
      ctx.beginPath();
      ctx.arc(projectile.x, projectile.y, projectile.radius, 0, Math.PI * 2);
      ctx.fillStyle = projectile.color;
      ctx.fill();
      ctx.closePath();
    }

    function updateProjectile() {
      if (!projectile.isFalling) {
        projectile.y -= projectile.velocity.y;
        projectile.velocity.y -= projectile.gravity * projectile.weight;

        if (projectile.velocity.y <= 0) {
          projectile.isFalling = true; // Start falling when velocity becomes 0
        }
      } else {
        projectile.y += projectile.velocity.y;
        projectile.velocity.y += projectile.gravity * projectile.weight;
      }

      projectile.x += projectile.velocity.x; // Move the projectile horizontally

      if (projectile.x + projectile.radius > canvas.width) {
        projectile.velocity.x = 0;
        // ctx.clearRect(x - radius, y - radius, radius * 2, radius * 2);
      }
      if (projectile.y + projectile.radius > canvas.height) {
        projectile.velocity.y = 0;
        projectile.velocity.x = 0;
      }
      if (projectile.y < 0) {
        projectile.velocity.y *= -1;
      }
      if (projectile.x < 0) {
        projectile.velocity.x = 0;
      }

      if (projectile.y === canvas.height) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.clearRect(
          projectile.x - projectile.radius,
          projectile.y - projectile.radius,
          projectile.x + projectile.radius,
          projectile.y + projectile.radius
        );
        return;
      }
      drawProjectile();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateProjectile();
      requestAnimationFrame(animate);
    }

    animate();

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
