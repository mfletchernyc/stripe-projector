import React from 'react'
import PropTypes from 'prop-types'

const InfoIcon = ({ fill, stroke }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23">
    <path fill={fill} stroke={stroke} strokeMiterlimit="10" d="M11.5,0.5c-6.08,0-11,4.92-11,11s4.92,11,11,11s11-4.92,11-11 S17.58,0.5,11.5,0.5z M10.19,4.19c0.41-0.41,0.89-0.61,1.46-0.61s1.06,0.2,1.46,0.61c0.4,0.41,0.6,0.9,0.6,1.47s-0.2,1.06-0.6,1.47 c-0.4,0.41-0.89,0.61-1.45,0.61c-0.59,0-1.08-0.21-1.48-0.63s-0.6-0.91-0.6-1.46C9.58,5.08,9.78,4.6,10.19,4.19z M15.02,19.43H7.98 v-1.22h0.26c0.65,0,1.06-0.11,1.24-0.34c0.17-0.23,0.26-0.62,0.26-1.18v-3.42c0-0.57-0.09-0.96-0.26-1.19 c-0.18-0.23-0.59-0.34-1.23-0.34H7.98v-1.22l5.47-0.88v7.04c0,0.58,0.09,0.98,0.28,1.2c0.18,0.22,0.61,0.33,1.29,0.33 C15.02,18.21,15.02,19.43,15.02,19.43z" />
  </svg>
)

InfoIcon.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string
}

InfoIcon.defaultProps = {
  fill: '#ffffff40',
  stroke: '#000000aa'
}

export default InfoIcon
