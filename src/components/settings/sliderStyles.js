// Slider needs style objects vs. css.

const triangle = window.encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="16.5" viewBox="0 0 22 16.5">
    <polygon fill="#ffffff" stroke="#00000080" stroke-miterlimit="10" points="11,15.5 1,0.5 21,0.5 "/>
  </svg>`
)

export const sliderStyle = {
  height: 20,
  margin: '20px 5px 5px',
  position: 'relative',
  width: 'calc(100% - 10px)'
}

export const railStyle = {
  backgroundColor: '#00000080',
  height: 1,
  position: 'absolute',
  width: '100%'
}

export const handleStyle = {
  background: `url('data:image/svg+xml;utf8,${triangle}')`,
  cursor: 'pointer',
  height: 16.5,
  marginLeft: -11,
  marginTop: -15.5,
  position: 'absolute',
  textAlign: 'center',
  touchAction: 'pan-x',
  width: 22,
  zIndex: 2
}

export const trackStyle = {
  background: '#fff',
  border: '1px solid #00000080',
  cursor: 'pointer',
  height: 3,
  position: 'absolute',
  transform: 'translate(0%, -45%)',
  zIndex: 1
}
