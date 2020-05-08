import { configureStore } from '@reduxjs/toolkit'
import displayReducer from '../components/display/displaySlice'
import machineReducer from '../components/machine/machineSlice'
import settingsReducer from '../components/settings/settingsSlice'

import initialSettings from './initialSettings'
import initialStripes from './initialStripes'
import { randomColor, randomColorArray } from './randomThings'

const reducer = {
  display: displayReducer,
  machine: machineReducer,
  settings: settingsReducer
}

const { colorLimits } = initialSettings
const colors = randomColorArray(colorLimits.min, colorLimits.max)

const initialMachine = {
  stripes: initialStripes(initialSettings, colors),
  colors,
  background: randomColor()
}

const preloadedState = {
  settings: initialSettings,
  machine: {
    ...initialMachine,
    mode: localStorage.getItem('mode') || 'pop',
    type: localStorage.getItem('type') || 'sharp',
    info: localStorage.getItem('info') === 'true',
    config: localStorage.getItem('config') === 'true'
  }
}

export default configureStore({
  reducer,
  preloadedState
})
