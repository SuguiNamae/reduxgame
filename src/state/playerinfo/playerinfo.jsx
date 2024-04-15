import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "playerInfo",
  initialState: {
    player1: "player1",
    player2: "player2",
    difficulty: "easy",
  },
  reducers: {
    saveUser1: (state, name) => (state.player1 = name.payload),
    saveUser2: (state, name) => (state.player2 = name.payload),
  },
});

export const playerState = (state) => state.playerInfo;
export const { saveUser1, saveUser2 } = playerSlice.actions;
export default playerSlice.reducer;
