import { configureStore } from "@reduxjs/toolkit";
import {counterSlice} from "./gamelogic/Gamelogic"
export const store = configureStore({
  reducer: counterSlice.reducer
})