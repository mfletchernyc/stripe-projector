import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import parse from 'html-react-parser'
import Slider from './Slider'

import {
  changeValue,
  changeRange,
  selectSettings,
  selectMachine
} from "./settingsSlice";

import styles from './Settings.module.css'

const Settings = () => {
  const dispatch = useDispatch()
  const settings = useSelector(selectSettings)
  const { prefs: { mode, config } } = useSelector(selectMachine)

  let settingsList = JSON.stringify(settings) // Temporary.
  settingsList = settingsList
    .substring(1, settingsList.length - 1)
    .replace(/{/g, '{<br />')
    .replace(/}/g, '<br />}')
    .replace(/:/g, ': ')
    .replace(/,/g, ',<br />')
    .replace(/\[/g, '[<br />')
    .replace(/\]/g, '<br />]')
    .replace(/,/g, '')

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

  const speedControl = () => {
    return mode === 'pop'
      ? 'cycleTime'
      : 'moveTime'
  }

  return config ? (
    <div className={styles.settings}>
      <section>
        {renderCompoundSlider('opacity')}
        {renderCompoundSlider('width')}

        {renderSimpleSlider(speedControl())}
      </section>

      <section className={styles.list}>
        {parse(settingsList)}
      </section>
    </div>
  )
    : null
}

export default Settings
