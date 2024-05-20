import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "gameLogic",
  initialState: {
    lifep1: 100,
    player: {},
  },
  reducers: {
    hit: (state) => {
      state.lifep1 -= 15;
    },
    playagain: (state) =>{
      state.lifep1 = 100
    }
  },
});

export const GameState = (state) => state.gameLogic;
export const { hit, playagain } = gameSlice.actions;
export default gameSlice.reducer;
