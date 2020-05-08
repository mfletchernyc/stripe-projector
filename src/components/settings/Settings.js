import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import parse from 'html-react-parser'
import Slider from './Slider'

import { changeRange, selectSettings, selectConfig } from './settingsSlice'

import styles from './Settings.module.css'

const Settings = () => {
  const dispatch = useDispatch()
  const settings = useSelector(selectSettings)
  const config = useSelector(selectConfig)

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

  const renderSlider = (setting) => (
    <>
      {`${setting}:`}
      <Slider
        values={settings[`${setting}Limits`]}
        onChange={(values) => dispatch(changeRange(
          { setting: `${setting}Limits`, values }
        ))}
      />
    </>
  )

  return config ? (
    <div className={styles.settings}>
      <section>
        {renderSlider('opacity')}
        {renderSlider('width')}
      </section>

      <section>{parse(settingsList)}</section>
    </div>
  )
    : null
}

export default Settings
