import React, { useEffect, useState } from "react";
import "./Temporary.style.scss";

const Temporary = () => {
  const [angleValue, setangleValue] = useState("");
  const [powerValue, setpowerValue] = useState("");
  let turnbased = 0;

  const handleInputChange1 = (event) => {
    setangleValue(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setpowerValue(event.target.value);
  };
  useEffect(() => {
    playerinit();
  }, []);

  const playerinit = () => {
    const canvas = document.getElementById("myCanvas2");
    const ctx = canvas.getContext("2d");

    const player1 = {
      width: (canvas.width * 1) / 10,
      height: (canvas.height * 1) / 10,
      x: canvas.width / 20,
      y: (canvas.height * 6) / 7,
      color: "blue",
    };

    const player2 = {
      width: (canvas.width * 1) / 10,
      height: (canvas.height * 1) / 10,
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
      if (turnbased % 2 === 0) {
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
      } else if (turnbased % 2 !== 0) {
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

      turnbased += 1;
    }

    function animatep() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawPlayers();
      document.addEventListener("keydown", updateplayers);
      requestAnimationFrame(animatep);
    }

    animatep();
  };
  const shootbal = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "red";
    let angle = (angleValue * Math.PI) / 180;
    let power = powerValue * 0.1;
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

    function animate(event) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateProjectile();
      document.addEventListener("keydown", () => {
        switch (event.key) {
          case "apace":
            animate();
            break;
          default:
            break;
        }
      });
      requestAnimationFrame(animate);
    }
  };

  return (
    <div className="mainforall">
      <canvas id="myCanvas"></canvas>
      <canvas id="myCanvas2"></canvas>

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
