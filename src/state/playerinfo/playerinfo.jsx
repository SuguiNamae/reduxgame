import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "playerInfo",
  initialState: {
    player1: "player1",
  },
  reducers: {
    saveUser1: (state, action) =>
      (state = { ...state, player1: action.payload }),
  },
});

export const playerState = (state) => state.playerInfo;
export const { saveUser1 } = playerSlice.actions;
export default playerSlice.reducer;
