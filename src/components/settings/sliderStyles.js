// Slider needs style objects vs. css.

const triangle = window.encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="16.5" viewBox="0 0 22 16.5">
    <polygon fill="#ffffff" stroke="#00000080" stroke-miterlimit="10" points="11,15.5 1,0.5 21,0.5 "/>
  </svg>`
)

export const sliderStyle = {
  position: 'relative',
  width: 'calc(100% - 10px)',
  height: 20,
  margin: '20px 5px 5px'
}

export const railStyle = {
  position: 'absolute',
  width: '100%',
  height: 1,
  backgroundColor: '#00000080'
}

export const handleStyle = {
  position: 'absolute',
  marginLeft: -11,
  marginTop: -15.5,
  zIndex: 2,
  width: 22,
  height: 16.5,
  textAlign: 'center',
  cursor: 'pointer',
  background: `url('data:image/svg+xml;utf8,${triangle}')`,
  touchAction: 'pan-x'
}

export const trackStyle = {
  transform: 'translate(0%, -45%)',
  position: 'absolute',
  height: 3,
  border: '1px solid #00000080',
  background: '#fff',
  zIndex: 1,
  cursor: 'pointer',
}
