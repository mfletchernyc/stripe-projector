import React from 'react'

import Display from './components/display/Display'
import Machine from './components/machine/Machine'
import './projector.css'

const Projector = () => (
  <div className="Projector">
    <Display />
    <Machine />
  </div>
)

// No double-tap zoom. https://stackoverflow.com/a/56393464/2266534
document.addEventListener('touchstart', (event) => {
  if (event.touches.length > 1) {
    event.preventDefault()
  }
}, { passive: false })

export default Projector
