import React from 'react'
import { useSelector } from 'react-redux'
import { stripesHTML, infoHTML } from './displayHTML'

import { selectMachine } from './displaySlice'

import styles from './Display.module.css'

const Display = () => {
  const {
    stripes, background, prefs: { type, info }
  } = useSelector(selectMachine)

  return (
    <div className={styles.display}>
      {info && infoHTML(stripes, background, styles)}
      {stripesHTML(stripes, styles, type)}
    </div>
  )
}

export default Display
