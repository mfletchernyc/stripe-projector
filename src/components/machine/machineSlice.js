import { createSlice } from '@reduxjs/toolkit'
import stripeObject from '../../app/stripeObject'

const savePrefs = (state) => {
  localStorage.setItem('sp-prefs', JSON.stringify(state.prefs))
}

export const machineSlice = createSlice({
  name: 'machine',
  initialState: {},
  reducers: {
    addStripe: (state, action) => {
      const { stripes } = state
      const { payload: { settings, colors } } = action
      const id = stripes.length > 0 ? stripes[stripes.length - 1].id + 1 : 0

      stripes.push(stripeObject(id, colors, settings))
    },

    removeStripe: (state) => {
      const { stripes } = state

      stripes.shift()
    },

    moveStripes: (state, action) => {
      const stripes = action.payload

      const movedStripes = stripes.map((stripe) => {
        let position = stripe.position + stripe.direction
        const halfWidth = stripe.width / 2

        if (position < 0 - halfWidth) {
          position = 100 + halfWidth
        }

        if (position > 100 + halfWidth) {
          position = 0 - halfWidth
        }

        return { ...stripe, position }
      })

      return {
        ...state,
        stripes: movedStripes
      }
    },

    changeBackground: (state, action) => {
      const color = action.payload.hex

      state.background = color
      document.body.style.background = color
    },

    changeColor: (state, action) => {
      const { payload: { stripes } } = action
      const newColor = action.payload.newColor.hex
      const oldColor = action.payload.color

      // Update the colors array.
      const index = state.colors.indexOf(oldColor)
      state.colors[index] = newColor

      // Update existing stripes.
      state.stripes = stripes.map((stripe) => {
        let { color } = stripe

        if (color === oldColor) {
          color = newColor
        }

        return { ...stripe, color }
      })
    },

    toggleType: (state) => {
      const { prefs: { type } } = state

      state.prefs.type = type === 'sharp' ? 'blur' : 'sharp'
      savePrefs(state)
    },

    toggleMode: (state) => {
      const { prefs: { mode } } = state

      state.prefs.mode = mode === 'pop' ? 'move' : 'pop'
      savePrefs(state)
    }
  }
})

export const {
  addStripe,
  removeStripe,
  moveStripes,
  changeBackground,
  changeColor,
  toggleType,
  toggleMode
} = machineSlice.actions

export const selectMachine = (state) => state.machine
export const selectSettings = (state) => state.settings

export default machineSlice.reducer
