import React from "react";
import "./Temporary.style.scss";
import { GameState, hit, shoot } from "../../state/gamelogic/Gamelogic";
import { useSelector, useDispatch } from "react-redux";

const Temporary = () => {
  const trying = useSelector(GameState)
  const life_score = trying.life;
  const energy_score = trying.energy;
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
