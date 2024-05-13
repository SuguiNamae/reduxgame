import React, { useEffect, useState } from "react";
import LifeBar from "../LifeBar/LifeBar";
import "./Temporary.style.scss";
import { useSelector, useDispatch } from "react-redux";
import { GameState, shoot, hit } from "../../state/gamelogic/Gamelogic";

// main component
const Temporary = () => {
  const gameMechanics = useSelector(GameState);
  const dispatch = useDispatch();
  let mylife1 = gameMechanics.lifep1;
  let mylife2 = gameMechanics.lifep2;
  let mybullets = gameMechanics.energyp1;
  let ishit = false;

  console.log(mylife1, mybullets);
  document.addEventListener("keydown", (event) => {
    if (event.key === " ") {
      playerinit();
    }
  });

  //detecting click on page
  document.addEventListener("click", (event) => {
    event.preventDefault();
    dispatch(shoot());
    const screenx = event.clientX;
    const screeny = event.clientY;
    setShootingData((prevState) => ({
      ...prevState,
      xposition: screenx,
    }));
    setShootingData((prevState) => ({
      ...prevState,
      yposition: screeny,
    }));
    shootbal(shootingData);
  });
  const [shootingData, setShootingData] = useState({
    playerone: {},
    playertwo: {},
    xposition: 0,
    yposition: 0,
  });
  // const [startPosition, setStartPosition] = useState({
  //   player1: {},
  //   player2: {},
  // });
  // primary load of screen
  // useEffect(() => {
  //   playerinit();
  // }, []);

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
    // setStartPosition({
    //   player1: { player1 },
    //   player2: { player2 },
    // });

    function drawPlayers() {
      ctx.fillStyle = player1.color;
      ctx.fillRect(player1.x, player1.y, player1.width, player1.height);
      ctx.fillStyle = player2.color;
      ctx.fillRect(player2.x, player2.y, player2.width, player2.height);
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
        player2.speed.x *= -1;
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
        player2.speed.y *= -1;
      }
      if (player1.y < 0) {
        player1.y = 0;
      }
      if (player2.y < 0) {
        player2.y = 0;
        player2.speed.y *= -1;
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
      setShootingData((prevState) => ({
        ...prevState,
        playerone: player1,
      }));
      setShootingData((prevState) => ({
        ...prevState,
        playertwo: player2,
      }));
      document.addEventListener("keydown", updateplayers);
      requestAnimationFrame(animatep);
    }
    animatep();
  };
  // main animation function

  const shootbal = (shootingdata) => {
    // gathering the data from outside of function
    let player1 = shootingData.playerone;
    let player2 = shootingData.playertwo;
    // declaring canvas
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    shootingdata.xposition =
      (canvas.width * shootingdata.xposition) / window.screen.width;
    shootingdata.yposition =
      (canvas.height * shootingdata.yposition) / window.screen.height;
    let EndPoint = { x: shootingdata.xposition, y: shootingdata.yposition };
    // color for projectile
    ctx.fillStyle = "red";
    // declaring projectile
    let projectile1 = {
      x: player1.x + player1.width / 2,
      y: player1.y + player1.height / 2,
      radius: 3,
      color: "red",
      velocity: {
        x: 2,
        y: 2,
      },
      gravity: 0.2, // Gravity value
      weight: 0.2, // Weight of the ball
    };
    let StartPoint = { x: player1.x, y: player1.y };
    let distance = Math.sqrt(
      (EndPoint.x - StartPoint.x) ** 2 + (EndPoint.y - StartPoint.y) ** 2
    );
    let vx = (EndPoint.x - StartPoint.x) / distance;
    let vy = (EndPoint.y - StartPoint.y) / distance;
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
      if (distance > 0 && ishit === false) {
        // drawProjectile1();
        projectile1.x += vx * 0.8;
        projectile1.y += vy * 0.8;
      }

      if (
        projectile1.x + projectile1.radius >= player2.x &&
        projectile1.x - projectile1.radius <= player2.x + player2.width &&
        projectile1.y + projectile1.radius >= player2.y &&
        projectile1.y - projectile1.radius <= player2.y + player2.height
      ) {
        // Collision with player 2 detected
        if (!ishit) {
          dispatch(hit());
        ishit = true;


          
        }
        console.log("2 got hit");
        ishit = true;
      }

      if (projectile1.x + projectile1.radius > canvas.width) {
        projectile1.velocity.x = 0;
      }
      if (projectile1.y + projectile1.radius > canvas.height) {
        projectile1.velocity.y = 0;
        projectile1.velocity.x = 0;
      }
      if (projectile1.y < 0) {
        projectile1.velocity.y *= -1;
      }
      if (projectile1.x < 0) {
        projectile1.velocity.x = 0;
      }

      if (projectile1.y === canvas.height) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      drawProjectile1();
    }
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateProjectile1();
      drawProjectile1();
      distance = Math.sqrt(
        (EndPoint.x - StartPoint.x) ** 2 + (EndPoint.y - StartPoint.y) ** 2
      );
      vx = (EndPoint.x - StartPoint.x) / distance;
      vy = (EndPoint.y - StartPoint.y) / distance;
      if (!ishit) {
        requestAnimationFrame(animate);
      }
      // calling the animation
    }
    if (!ishit) {
      animate();
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };
  return (
    <div className="mainforall">
      <div className="forlifes">
        <LifeBar number={mylife1} bgcolor={"blue"} />
        <LifeBar number={mylife2} bgcolor={"green"} />
      </div>

      <canvas id="myCanvas"></canvas>
      <canvas id="myCanvas2"></canvas>
    </div>
  );
};

export default Temporary;
