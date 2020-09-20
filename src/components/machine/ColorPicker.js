import React from 'react'
import PropTypes from 'prop-types'
import InputColor from 'react-input-color'

const ColorPicker = ({ initialValue, className, onChange }) => (
  <InputColor
    initialValue={initialValue}
    className={className}
    onChange={onChange}
    placement="left"
  />
)

ColorPicker.propTypes = {
  initialValue: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default ColorPicker
