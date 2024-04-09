import React from "react";
import "./Temporary.style.scss";
import { hit, shoot } from "./../state/gamelogic/Gamelogic";
import { useSelector, useDispatch } from "react-redux";
import { store } from "./../state/store";
// import logicslice from "./gamelogic/Gamelogic";

const Temporary = () => {
  const life_score = useSelector((state) => state.life);
  const energy_score = useSelector((state) => state.energy);
  const dispatch = useDispatch()
  return (
    <div className="temporaryforall">
      <div className="temporaryforabi" onClick={() => dispatch(shoot())}>
        abi
      </div>
      <div>{life_score}</div>
      <div>{energy_score}</div>

      <div
        className="temporaryforquermez"
        onClick={() => dispatch(hit())}
      >
        quermez
      </div>
      <div className="temporaryforball">ball</div>
    </div>
  );
};

export default Temporary;

// const logicslice = createSlice({
//   name: "logic",
//   initialstate: {
//     life: 100,
//     energy: 5,
//   },
//   reducers: {
//     hit: (state, action) => {
//       state.life += 1;
//     },
//     shoot: (state, action) => {
//       state.energy -= 1;
//     },
//   },
// });
// const store = configureStore({
//   reducer: logicslice.reducer
// });
// // export default logicslice.reducer;
// const { hit, shoot } = logicslice.actions
// const logicState = (state) => state.counter;

// const shoot = useSelector(logicState);
