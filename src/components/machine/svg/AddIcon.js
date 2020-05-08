import React from 'react'
import PropTypes from 'prop-types'

const AddIcon = ({ fill, stroke }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
    <polygon fill={fill} stroke={stroke} strokeMiterlimit="10" points="20.5,8.25 12.75,8.25 12.75,0.5 8.25,0.5 8.25,8.25 0.5,8.25 0.5,12.75 8.25,12.75 8.25,20.5 12.75,20.5 12.75,12.75 20.5,12.75 " />
  </svg>
)

AddIcon.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string
}

AddIcon.defaultProps = {
  fill: '#ffffff40',
  stroke: '#000000aa'
}

export default AddIcon
