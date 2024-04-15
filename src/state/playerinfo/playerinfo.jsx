import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "playerInfo",
  initialState: {
    player1: "hjgv",
    player2: "nj",
    difficulty: undefined,
  },
  reducers: {
      saveUser1: (state, action) => action.payload,
      saveUser2: (state, action) => action.payload,
  },
});

export const { saveUser1, saveUser2 } = counterSlice.actions;
