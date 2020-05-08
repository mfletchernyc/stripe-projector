import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'
import ColorPicker from './ColorPicker'
import useInterval from './useInterval'
import {
  InfoIcon, SettingsIcon, ResetIcon, AddIcon, RemoveIcon
} from './svg'

import {
  addStripe,
  removeStripe,
  moveStripes,
  changeBackground,
  changeColor,
  toggleType,
  toggleMode,
  toggleConfig,
  toggleInfo,
  selectMachine,
  selectSettings
} from './machineSlice'

import styles from './Machine.module.css'

const Machine = () => {
  const dispatch = useDispatch()
  const settings = useSelector(selectSettings)

  const {
    stripes,
    colors,
    background,
    mode,
    config,
    info
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

  const reset = () => {
    const reload = window.location

    // reload() doesn't fix accidental double-tap zoom.
    window.location = reload
  }

  const popMode = mode === 'pop'
  const timer = popMode ? settings.cycleTime : settings.moveTime

  useInterval(() => {
    if (popMode) {
      dispatch(addStripe({ settings, colors }))
      dispatch(removeStripe())
    } else {
      dispatch(moveStripes(stripes))
    }
  }, timer * 1000)

  window.onload = () => {
    dispatch(changeBackground({ hex: background }))
  }

  return (
    <div className={styles.machine}>
      <section className={styles['button-container']}>
        <button
          type="button"
          className={classNames(styles.button, styles.quantity)}
          onClick={() => dispatch(removeStripe())}
        >
          <RemoveIcon />
        </button>

        <span className={styles.total}>
          {stripes.length}
        </span>

        <button
          type="button"
          className={classNames(styles.button, styles.quantity)}
          onClick={() => dispatch(addStripe({ settings, colors }))}
        >
          <AddIcon />
        </button>
      </section>

      <section className={styles['button-container']}>
        <button
          type="button"
          className={classNames(styles.button, styles['button-text'])}
          onClick={() => dispatch(toggleType())}
        >
          type
        </button>

        <button
          type="button"
          className={classNames(styles.button, styles['button-text'])}
          onClick={() => dispatch(toggleMode())}
        >
          mode
        </button>
      </section>

      <section className={styles['button-container']}>
        <button
          type="button"
          className={[styles.button]}
          onClick={() => dispatch(toggleConfig())}
        >
          <SettingsIcon fill={config ? '#ffffffaa' : '#ffffff40'} />
        </button>

        <button
          type="button"
          className={styles.button}
          onClick={() => dispatch(toggleInfo())}
        >
          <InfoIcon fill={info ? '#ffffffaa' : '#ffffff40'} />
        </button>
      </section>

      <section className={styles['button-container']}>
        <button
          type="button"
          className={classNames(styles.button, styles['button-wide'])}
          onClick={() => reset()}
        >
          <ResetIcon />
        </button>
      </section>

      <section>
        background:
        {renderColorPicker(
          background,
          (newColor) => dispatch(changeBackground(newColor))
        )}
      </section>

      <section>
        colors:
        {renderColorPickers()}
      </section>
    </div>
  )
}

export default Machine
