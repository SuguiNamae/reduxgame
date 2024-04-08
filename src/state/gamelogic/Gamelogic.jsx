const { createSlice } = require("@reduxjs/toolkit")

const initialstate = {
    life:100,
    energy:5,
}
const logicslice = createSlice({
    name: "logic",
    initialstate,
    reducers:{
        hit: (state, action)=>{
            state.life +=1
        },
        shoot: (state, action)=>{
            state.energy -=1
        }
    }
})

export default logicslice.reducer
ex