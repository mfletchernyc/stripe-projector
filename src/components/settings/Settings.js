import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Slider from './Slider'

import {
  changeValue,
  changeRange,
  selectSettings,
  selectMachine
} from './settingsSlice'

const Settings = () => {
  const dispatch = useDispatch()
  const settings = useSelector(selectSettings)
  const { prefs: { mode, debug } } = useSelector(selectMachine)

  useEffect(() => {
    if (debug) {
      console.log(JSON.stringify(settings, null, 2)) // eslint-disable-line no-console
    }
  }, [debug, settings])

  const renderSimpleSlider = (setting, label = setting) => (
    <>
      {`${label}:`}
      <Slider
        values={settings[`${setting}`]}
        onChange={(values) => dispatch(changeValue(
          { setting: `${setting}`, values }
        ))}
      />
    </>
  )

  const renderCompoundSlider = (setting, label = setting) => (
    <>
      {`${label}:`}
      <Slider
        values={settings[`${setting}`]}
        onChange={(values) => dispatch(changeRange(
          { setting: `${setting}`, values }
        ))}
      />
    </>
  )

  const delayControl = () => (
    mode === 'pop' ? 'cycleTime' : 'moveTime'
  )

  const delayControlLabel = () => (
    mode === 'pop' ? 'pop delay' : 'move delay'
  )

  return (
    <>
      {renderCompoundSlider('opacity')}
      {renderCompoundSlider('width')}
      {renderSimpleSlider(delayControl(), delayControlLabel())}
    </>
  )
}

export default Settings
