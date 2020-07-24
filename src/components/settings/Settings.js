import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Slider from './Slider'
import ResetIcon from './svg/ResetIcon'

import {
  changeValue,
  changeRange,
  selectSettings,
  selectMachine
} from './settingsSlice'

import styles from './Settings.module.css'

const Settings = () => {
  const dispatch = useDispatch()
  const settings = useSelector(selectSettings)
  const { prefs: { mode, debug } } = useSelector(selectMachine)

  useEffect(() => {
    if (debug) {
      console.log(JSON.stringify(settings, null, 2)) // eslint-disable-line no-console
    }
  }, [debug, settings])

  const renderSimpleSlider = (setting) => (
    <>
      {`${setting}:`}
      <Slider
        values={settings[`${setting}`]}
        onChange={(values) => dispatch(changeValue(
          { setting: `${setting}`, values }
        ))}
      />
    </>
  )

  const renderCompoundSlider = (setting) => (
    <>
      {`${setting}:`}
      <Slider
        values={settings[`${setting}`]}
        onChange={(values) => dispatch(changeRange(
          { setting: `${setting}`, values }
        ))}
      />
    </>
  )

  const speedControl = () => (
    mode === 'pop'
      ? 'cycleTime'
      : 'moveTime'
  )

  const reset = () => {
    const reload = window.location

    // reload() doesn't fix accidental double-tap zoom.
    window.location = reload
  }

  return (
    <div className={styles.settings}>
      {renderCompoundSlider('opacity')}
      {renderCompoundSlider('width')}

      {renderSimpleSlider(speedControl())}

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

export default Settings
