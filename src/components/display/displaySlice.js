import { createSlice } from '@reduxjs/toolkit'

export const displaySlice = createSlice({
  name: 'display',
  initialState: {}
})

export const selectMachine = (state) => state.machine

export default displaySlice.reducer
