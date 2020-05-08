// Slider needs a style object, not css.

export const sliderStyle = {
  position: 'relative',
  width: 'calc(100% - 10px)',
  height: 20,
  margin: '15px 5px 0'
}

export const railStyle = {
  position: 'absolute',
  width: '100%',
  height: 1,
  backgroundColor: '#00000080'
}

export const handleStyle = {
  position: 'absolute',
  marginLeft: -5,
  marginTop: -10,
  zIndex: 2,
  width: 10,
  height: 20,
  textAlign: 'center',
  border: '1px solid #00000080',
  cursor: 'pointer',
  backgroundColor: '#fff',
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
