import { createSlice } from '@reduxjs/toolkit'

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: {},
  reducers: {
    changeRange: (state, action) => {
      const { payload: { setting, values } } = action
      const [low, high] = values

      state[setting].low = low
      state[setting].high = high
    }
  }
})

export const { changeRange } = settingsSlice.actions

export const selectSettings = (state) => state.settings
export const selectConfig = (state) => state.machine.prefs.config

export default settingsSlice.reducer
