import React from "react";
import LifeBar from "../LifeBar/LifeBar";
import "./Temporary.style.scss";
import { useSelector, useDispatch } from "react-redux";
import { GameState, hit, playagain } from "../../state/gamelogic/Gamelogic";
import { Link } from "react-router-dom";

const Temporary = () => {
  const gameMechanics = useSelector(GameState);
  const dispatch = useDispatch();
  let mylife1 = gameMechanics.lifep1;
  let stilgoing = false;
  // saving player1
  let player1a = {};
  // the space key makes the player
  const playgame = () => {
    if (true) {
      playerinit();
      setTimeout(() => {
        shootbal();
      }, 3000);
    }
  };
  document.addEventListener("keydown", (event) => {
    if (event.key === " " && !stilgoing) {
      playgame();
      stilgoing = true;
    }
  });
  // player and the movement
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
    function drawPlayers() {
      ctx.fillStyle = player1.color;
      ctx.fillRect(player1.x, player1.y, player1.width, player1.height);
      ctx.closePath();
    }
    function updateplayers(event) {
      //making sure player one wont go off screen
      // horizantal
      if (player1.x + player1.width > canvas.width) {
        player1.x = canvas.width - player1.width;
      }
      if (player1.x < 0) {
        player1.x = 0;
      }
      // vertical
      if (player1.y > canvas.height - player1.height) {
        player1.y = canvas.height - player1.height;
      }
      if (player1.y < 0) {
        player1.y = 0;
      }
      // making the players move
      switch (event.key) {
        case "a":
          player1.x -= player1.speed.x;
          break;
        case "d":
          player1.x += player1.speed.x;
          break;
        case "s":
          player1.y += player1.speed.x;
          break;
        case "w":
          player1.y -= player1.speed.x;
          break;
        default:
          break;
      }
      drawPlayers();
    }
    function animatep() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawPlayers();
      player1a = player1;
      document.addEventListener("keydown", updateplayers);
      requestAnimationFrame(animatep);
    }
    animatep();
  };

  const shootbal = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    // color for projectile
    ctx.fillStyle = "red";
    // declaring projectile
    let projectile1 = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: 3,
      color: "red",
      velocity: {
        x: 0.21,
        y: 0.2,
      },
      gravity: 0.2, // Gravity value
      weight: 0.2, // Weight of the ball
    };
    // drawing the projectile
    function drawProjectile1() {
      ctx.beginPath();
      ctx.arc(projectile1.x, projectile1.y, projectile1.radius, 0, Math.PI * 2);
      ctx.fillStyle = projectile1.color;
      ctx.fill();
      ctx.closePath();
    }
    // moving the projectile
    function updateProjectile1() {
      if (mylife1 > 0) {
        projectile1.x += projectile1.velocity.x;
        projectile1.y += projectile1.velocity.y;
      }
      // keeping the projectile in screen
      if (projectile1.x + projectile1.radius > canvas.width) {
        projectile1.velocity.x *= -1.1;
        if (Math.abs(projectile1.velocity.x) > 1) {
          projectile1.velocity.x *= 0.9;
        }
      }
      if (projectile1.y + projectile1.radius > canvas.height) {
        projectile1.velocity.y *= -1.1;
        if (Math.abs(projectile1.velocity.y) > 1) {
          projectile1.velocity.y *= 0.9;
        }
      }
      if (projectile1.y < 0) {
        projectile1.velocity.y *= -1.1;
        if (Math.abs(projectile1.velocity.y) > 1) {
          projectile1.velocity.y *= 0.9;
        }
      }
      if (projectile1.x < 0) {
        projectile1.velocity.x *= -1.1;
        if (Math.abs(projectile1.velocity.x) > 1) {
          projectile1.velocity.x *= 0.9;
        }
      }
      // detectng hiting the player on :
      // bottom
      if (
        Math.abs(
          projectile1.y + projectile1.radius - player1a.y - player1a.height
        ) < 0.2 &&
        player1a.x <= projectile1.x + projectile1.radius &&
        projectile1.x + projectile1.radius <= player1a.x + player1a.width
      ) {
        projectile1.velocity.y *= -1.1;
        dispatch(hit());
        if (Math.abs(projectile1.velocity.y) > 1) {
          projectile1.velocity.y *= 0.9;
        }
      }
      // top
      if (
        Math.abs(projectile1.y + projectile1.radius - player1a.y) < 0.2 &&
        player1a.x <= projectile1.x + projectile1.radius &&
        projectile1.x + projectile1.radius <= player1a.x + player1a.width
      ) {
        projectile1.velocity.y *= -1.1;
        dispatch(hit());
        if (Math.abs(projectile1.velocity.y) > 1) {
          projectile1.velocity.y *= 0.9;
        }
      }
      // left
      if (
        Math.abs(projectile1.x + projectile1.radius - player1a.x) < 0.2 &&
        player1a.y <= projectile1.y + projectile1.radius &&
        projectile1.y + projectile1.radius <= player1a.y + player1a.height
      ) {
        projectile1.velocity.x *= -1.1;
        dispatch(hit());
        if (Math.abs(projectile1.velocity.x) > 1) {
          projectile1.velocity.x *= 0.9;
        }
      }
      //right
      if (
        Math.abs(
          projectile1.x + projectile1.radius - player1a.x - player1a.width
        ) < 0.2 &&
        player1a.y <= projectile1.y + projectile1.radius &&
        projectile1.y + projectile1.radius <= player1a.y + player1a.height
      ) {
        projectile1.velocity.x *= -1.1;
        dispatch(hit());
        if (Math.abs(projectile1.velocity.x) > 1) {
          projectile1.velocity.x *= 0.9;
        }
      }
      drawProjectile1();
    }
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateProjectile1();
      drawProjectile1();
      requestAnimationFrame(animate);
    }
    animate();
  };
  return (
    <div className="mainforall">
      {mylife1 > 0 ? (
        <div className="forwraper">
          <div className="forlifes">
            <LifeBar number={mylife1} bgcolor={"blue"} />
          </div>
          <canvas id="myCanvas"></canvas>
          <canvas id="myCanvas2"></canvas>
        </div>
      ) : (
        <div className="gameover">
          <Link
            to={"/"}
            onClick={() => {
              dispatch(playagain());
              stilgoing = false;
            }}
          >
            go to home
          </Link>
          <button
            onClick={() => {
              dispatch(playagain());
              stilgoing = false;
            }}
          >
            play again
          </button>
        </div>
      )}
    </div>
  );
};

export default Temporary;
