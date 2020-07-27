import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Settings from '../settings/Settings'
import ColorPicker from './ColorPicker'
import useInterval from './useInterval'
import { AddIcon, RemoveIcon, ResetIcon } from './svg'

import {
  addStripe,
  removeStripe,
  moveStripes,
  changeBackground,
  changeColor,
  toggleType,
  toggleMode,
  selectMachine,
  selectSettings
} from './machineSlice'

import styles from './machine.module.css'

const Machine = () => {
  const dispatch = useDispatch()
  const settings = useSelector(selectSettings)

  const {
    stripes,
    colors,
    background,
    prefs: { mode }
  } = useSelector(selectMachine)

  let colorPickerIndex = 0

  const renderColorPicker = (initialColor, action) => {
    colorPickerIndex += 1

    return (
      <ColorPicker
        key={colorPickerIndex}
        initialValue={initialColor}
        className={styles['color-picker']}
        onChange={action}
      />
    )
  }

  const renderColorPickers = () => (
    colors.map((color) => (
      renderColorPicker(
        color,
        (newColor) => dispatch(changeColor({ newColor, color, stripes }))
      )
    ))
  )

  const popMode = mode === 'pop'

  const timer = popMode
    ? settings.cycleTime.current
    : settings.moveTime.current

  useInterval(() => {
    if (popMode) {
      dispatch(addStripe({ settings, colors }))
      dispatch(removeStripe())
    } else {
      dispatch(moveStripes(stripes))
    }
  }, timer)

  window.onload = () => {
    dispatch(changeBackground({ hex: background }))
  }

  const reset = () => {
    const reload = window.location

    // reload() doesn't fix accidental double-tap zoom.
    window.location = reload
  }

  return (
    <div className={styles.machine}>
      <section className={styles.quantity}>
        <button
          type="button"
          className={styles.button}
          onClick={() => dispatch(removeStripe())}
        >
          <RemoveIcon />
        </button>

        <span className={styles.total}>
          {stripes.length.toString().padStart(2, '0')}
        </span>

        <button
          type="button"
          className={styles.button}
          onClick={() => dispatch(addStripe({ settings, colors }))}
        >
          <AddIcon />
        </button>
      </section>

      <button
        type="button"
        className={styles.button}
        onClick={() => dispatch(toggleType())}
      >
        type
      </button>

      <button
        type="button"
        className={styles.button}
        onClick={() => dispatch(toggleMode())}
      >
        mode
      </button>

      <section>
        <span className={styles.label}>background:</span>
        {renderColorPicker(
          background,
          (newColor) => dispatch(changeBackground(newColor))
        )}
      </section>

      <section>
        <span className={styles.label}>stripes:</span>
        {renderColorPickers()}
      </section>

      <section className={styles.settings}>
        <Settings />
      </section>

      <button
        type="button"
        className={styles.button}
        onClick={() => reset()}
      >
        <ResetIcon />
      </button>
    </div>
  )
}

export default Machine
