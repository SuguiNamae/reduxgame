import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "gameLogic",
  initialState: {
    energyp1: 9,
    lifep1: 100,
    lifep2: 100,
  },
  reducers: {
    shoot: (state) => {
      state.energyp1 -= 1;
    },
    hit: (state) => {
      state.lifep2 -= 15;
    },
  },
});

export const GameState = (state) => state.gameLogic;
export const { shoot, hit } = gameSlice.actions;
export default gameSlice.reducer;
