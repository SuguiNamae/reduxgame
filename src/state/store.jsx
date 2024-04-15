import { configureStore } from "@reduxjs/toolkit";
import gameLogicReducer from "./gamelogic/Gamelogic";
import playerInfoReducer from "./playerinfo/playerinfo";

export const store = configureStore({
  reducer: {
    gameLogic: gameLogicReducer,
    playerInfo: playerInfoReducer,
  },
});
