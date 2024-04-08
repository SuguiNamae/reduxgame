import { configureStore } from "@reduxjs/toolkit";
import logicreducer from "./gamelogic/Gamelogic"
export const store = configureStore({
  reducer:{
    logic:logicreducer
  },
})