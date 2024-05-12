import React, { useEffect, useState } from "react";
import "./Temporary.style.scss";
// main component
const Temporary = () => {
  // handling input for power and angle
  const [angleValue, setangleValue] = useState("");
  const [powerValue, setpowerValue] = useState("");
  // handling players turn
  // making a flag for shooting the projectile
  let spaceKeyPressed = false;
  // detecting if the ball is still moving
  let ballInMotion = true;
  // detecting space key pressed
  document.addEventListener("keydown", (event) => {
    if (event.key === " " && ballInMotion) {
      ballInMotion = false;
      spaceKeyPressed = true;
      // shootbal();
    }
  });
  // inputs for angle and power
  const handleInputChange1 = (event) => {
    setangleValue(event.target.value);
  };
  const handleInputChange2 = (event) => {
    setpowerValue(event.target.value);
  };
  // primary load of screen
  useEffect(() => {
    playerinit();
  });

  // players

  const playerinit = () => {
    const canvas = document.getElementById("myCanvas2");
    const ctx = canvas.getContext("2d");

    const player1 = {
      width: (canvas.width * 1) / 10,
      height: (canvas.height * 1) / 10,
      x: canvas.width / 20,
      y: (canvas.height * 6) / 7,
      color: "blue",
      speed: {
        x: 2,
        y: 2,
      },
    };
    const player2 = {
      width: (canvas.width * 1) / 10,
      height: (canvas.height * 1) / 10,
      x: (canvas.width * 17.1) / 20,
      y: (canvas.height * 6) / 7,
      color: "green",
      speed: {
        x: 2,
        y: 2,
      },
    };

    function drawPlayers() {
      ctx.fillStyle = player1.color;
      ctx.fillRect(player1.x, player1.y, player1.width, player1.height);
      ctx.fillStyle = player2.color;
      ctx.fillRect(player2.x, player2.y, player2.width, player2.height);
      ctx.beginPath();
      ctx.fillStyle = "purple";
      ctx.fillRect(
        (canvas.width * 2) / 3,
        (canvas.height * 4.15) / 5,
        canvas.width / 100,
        canvas.height
      );
      ctx.fillRect(
        (canvas.width * 1) / 3,
        (canvas.height * 4.15) / 5,
        canvas.width / 100,
        canvas.height
      );

      ctx.fill();
      ctx.closePath();
    }

    function updateplayers(event) {
      //making sure player one and two wont go off screen
      // horizantal
      if (player1.x + player1.width > canvas.width) {
        player1.x = canvas.width - player1.width;
      }
      if (player2.x + player2.width > canvas.width) {
        player2.x = canvas.width - player2.width;
        player2.speed.x *= -1
      }
      if (player1.x < 0) {
        player1.x = 0;
      }
      if (player2.x < 0) {
        player2.speed.x *= -1;
        player2.x = 0;
      }
      // vertical
      if (player1.y > canvas.height - player1.height) {
        player1.y = canvas.height - player1.height;
      }
      if (player2.y > canvas.height - player2.height) {
        player2.y = canvas.height - player2.height;
        player2.speed.y *= -1
      }
      if (player1.y < 0) {
        player1.y = 0;
      }
      if (player2.y < 0) {
        player2.y = 0;
        player2.speed.y *= -1

      }
      // making the players move

      switch (event.key) {
        case "a":
          player1.x -= player1.speed.x;
          player2.x += player2.speed.x;
          player2.y -= player2.speed.y;

          break;
        case "d":
          player1.x += player1.speed.x;
          player2.x -= player2.speed.x;
          player2.y += player2.speed.y;

          break;
        case "s":
          player1.y += player1.speed.x;
          player2.x -= player2.speed.x;
          player2.y += player2.speed.y;

          break;
        case "w":
          player1.y -= player1.speed.x;
          player2.x += player2.speed.x;
          player2.y -= player2.speed.y;

          break;
        default:
          break;
      }
      drawPlayers();
    }

    function animatep() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawPlayers();
      document.addEventListener("keydown", updateplayers);
      requestAnimationFrame(animatep);
    }

    animatep();
    shootbal(player1, player2)
  };
  // main animation function

  const shootbal = (player1, player2) => {
    // declaring canvas
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    // color for projectile
    ctx.fillStyle = "red";
    //angle and power for projectile
    let angle = (angleValue * Math.PI) / 180;
    let power = powerValue * 0.1;
    // declaring projectile
    let projectile = {
      x: player1.x,
      y: (7 * canvas.height) / 8,
      radius: 3,
      color: "red",
      velocity: {
        x: Math.cos(angle) * power,
        y: Math.sin(angle) * power,
      },
      gravity: 0.2, // Gravity value
      weight: 0.2, // Weight of the ball
      isFalling: false, // Flag to indicate if the projectile is falling
    };
    // drawing the projectile
    function drawProjectile() {
      ctx.beginPath();
      ctx.arc(projectile.x, projectile.y, projectile.radius, 0, Math.PI * 2);
      ctx.fillStyle = projectile.color;
      ctx.fill();
      ctx.closePath();
    }
    // moving the projectile
    function updateProjectile() {
      //stop the animation if the ball missed
      if (projectile.velocity.x === 0 && projectile.velocity.y === 0) {
        setTimeout(function () {
          spaceKeyPressed = false;
          ballInMotion = true;
        }, 2000);
      }
      // detect the purple walls
      if (
        (projectile.x + projectile.radius >= canvas.width / 3 &&
          projectile.x + projectile.radius <=
            canvas.width / 3 + canvas.width / 100 &&
          projectile.y + projectile.radius >= (canvas.height * 4.15) / 5 &&
          projectile.y + projectile.radius <= canvas.height) ||
        (projectile.x + projectile.radius >= (canvas.width * 2) / 3 &&
          projectile.x + projectile.radius <=
            (canvas.width * 2) / 3 + canvas.width / 100 &&
          projectile.y + projectile.radius >= (canvas.height * 4.15) / 5 &&
          projectile.y + projectile.radius <= canvas.height)
      ) {
        // Collision with purple barrier detected
        spaceKeyPressed = false;
        ballInMotion = true;
      }
      if (
        projectile.x + projectile.radius >= player1.x &&
        projectile.x - projectile.radius <= player1.x + player1.width &&
        projectile.y + projectile.radius >= player1.y &&
        projectile.y - projectile.radius <= player1.y + player1.height
      ) {
        // Collision with player 1 detected
        spaceKeyPressed = false;
        ballInMotion = true;
      }
      if (
        projectile.x + projectile.radius >= player2.x &&
        projectile.x - projectile.radius <= player2.x + player2.width &&
        projectile.y + projectile.radius >= player2.y &&
        projectile.y - projectile.radius <= player2.y + player2.height
      ) {
        // Collision with player 2 detected
        spaceKeyPressed = false;
        ballInMotion = true;
      }
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

      if (spaceKeyPressed) {
        updateProjectile();
        drawProjectile();
      }

      requestAnimationFrame(animate);
    }
    // calling the animation
    animate();
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
      </div>
    </div>
  );
};

export default Temporary;

// function drawProjectile() {
//   ctx.beginPath();
//   ctx.arc(projectile.x, projectile.y, projectile.radius, 0, Math.PI * 2);
//   ctx.fillStyle = projectile.color;
//   ctx.fill();
//   ctx.closePath();
// }

// function updateProjectile() {
//   if (!projectile.isFalling) {
//     projectile.y -= projectile.velocity.y;
//     projectile.velocity.y -= projectile.gravity * projectile.weight;

//     if (projectile.velocity.y <= 0) {
//       projectile.isFalling = true; // Start falling when velocity becomes 0
//     }
//   } else {
//     projectile.y += projectile.velocity.y;
//     projectile.velocity.y += projectile.gravity * projectile.weight;
//   }

//   projectile.x += projectile.velocity.x; // Move the projectile horizontally

//   if (projectile.x + projectile.radius > canvas.width) {
//     projectile.velocity.x = 0;
//     // ctx.clearRect(x - radius, y - radius, radius * 2, radius * 2);
//   }
//   if (projectile.y + projectile.radius > canvas.height) {
//     projectile.velocity.y = 0;
//     projectile.velocity.x = 0;
//   }
//   if (projectile.y < 0) {
//     projectile.velocity.y *= -1;
//   }
//   if (projectile.x < 0) {
//     projectile.velocity.x = 0;
//   }

//   if (projectile.y === canvas.height) {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.clearRect(
//       projectile.x - projectile.radius,
//       projectile.y - projectile.radius,
//       projectile.x + projectile.radius,
//       projectile.y + projectile.radius
//     );
//     return;
//   }
//   drawProjectile();
// }

// function animate(event) {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   updateProjectile();
//   document.addEventListener("keydown", () => {
//     switch (event.key) {
//       case "apace":
//         animate();
//         break;
//       default:
//         break;
//     }
//   });
//   requestAnimationFrame(animate);
// }
