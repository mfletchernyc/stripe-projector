import React from 'react'
import PropTypes from 'prop-types'

const ResetIcon = ({ fill, stroke }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26.4" height="23" viewBox="0 0 26.4 23">
    <path fill={fill} stroke={stroke} strokeMiterlimit="10" d="M25.5,9.66h-3.16c-0.88-5.2-5.4-9.16-10.84-9.16C5.42,0.5,0.5,5.43,0.5,11.5 s4.92,11,10.99,11c2.77,0,5.3-1.03,7.23-2.71l-2.28-2.89c-1.31,1.2-3.04,1.94-4.95,1.94c-4.04,0-7.33-3.29-7.33-7.33 s3.29-7.33,7.33-7.33c3.41,0,6.27,2.34,7.09,5.49h-3.2c-0.4,0-0.52,0.26-0.27,0.57l4.87,5.99c0.25,0.32,0.67,0.32,0.92,0l4.87-5.99 C26.02,9.92,25.9,9.66,25.5,9.66z" />
  </svg>
)

ResetIcon.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string
}

ResetIcon.defaultProps = {
  fill: '#ffffff40',
  stroke: '#000000aa'
}

export default ResetIcon
