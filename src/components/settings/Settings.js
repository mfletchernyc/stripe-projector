import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Slider from './Slider'

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
  const { prefs: { mode, config, debug } } = useSelector(selectMachine)

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

  return config ? (
    <div className={styles.settings}>
      <section>
        {renderCompoundSlider('opacity')}
        {renderCompoundSlider('width')}

        {renderSimpleSlider(speedControl())}
      </section>
    </div>
  )
    : null
}

export default Settings
