import { createSlice } from '@reduxjs/toolkit'

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: {},
  reducers: {
    changeValue: (state, action) => {
      const { payload: { setting, values } } = action
      const [current] = values

      state[setting].current = current
    },
    changeRange: (state, action) => {
      const { payload: { setting, values } } = action
      const [low, high] = values

      state[setting].low = low
      state[setting].high = high
    }
  }
})

export const { changeValue, changeRange } = settingsSlice.actions

export const selectSettings = (state) => state.settings
export const selectMachine = (state) => state.machine
export const selectConfig = (state) => state.machine.prefs.config

export default settingsSlice.reducer
