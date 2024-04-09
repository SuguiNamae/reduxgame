import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    energy: 5,
    life:100,
  },
  reducers: {
    shoot: state => {
      
      state.energy -= 1
    },
    hit: state => {
      state.life -= 15
    }
  }
})

export const { shoot, hit } = counterSlice.actions
