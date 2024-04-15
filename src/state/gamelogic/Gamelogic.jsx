import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "gameLogic",
  initialState: {
    energy: 5,
    life: 100,
  },
  reducers: {
    shoot: (state) => {
      state.energy -= 1;
    },
    hit: (state) => {
      state.life -= 15;
    },
  },
});

export const GameState = (state) => state.gameLogic;
export const { shoot, hit } = gameSlice.actions;
export default gameSlice.reducer;
