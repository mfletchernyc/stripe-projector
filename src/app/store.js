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

const spPrefs = JSON.parse(localStorage.getItem('sp-prefs'))

const preloadedState = {
  settings: initialSettings,
  machine: {
    ...initialMachine,
    prefs: {
      mode: (spPrefs && spPrefs.mode) || 'pop',
      type: (spPrefs && spPrefs.type) || 'sharp',
      info: spPrefs && spPrefs.info,
      config: spPrefs && spPrefs.config
    }
  }
}

localStorage.setItem('sp-prefs', JSON.stringify(preloadedState.machine.prefs))

export default configureStore({
  reducer,
  preloadedState
})
