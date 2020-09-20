// Slider needs style objects vs. css.

const triangle = window.encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 28 20">
    <polygon fill="#80808033" stroke="#00000099" stroke-miterlimit="10" points="14,19 1,0.5 27,0.5 "/>
  </svg>`
)

export const sliderStyle = {
  height: 20,
  margin: '22px 13px 5px',
  position: 'relative',
  width: 'calc(100% - 26px)'
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
  height: 20,
  marginLeft: -14,
  marginTop: -19,
  position: 'absolute',
  textAlign: 'center',
  touchAction: 'pan-x',
  width: 28,
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
