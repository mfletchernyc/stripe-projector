import React from 'react'
import PropTypes from 'prop-types'

const RemoveIcon = ({ fill, stroke }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
    <rect x="0.5" y="8.25" fill={fill} stroke={stroke} strokeMiterlimit="10" width="20" height="4.5" />
  </svg>
)

RemoveIcon.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string
}

RemoveIcon.defaultProps = {
  fill: '#ffffff40',
  stroke: '#000000aa'
}

export default RemoveIcon
