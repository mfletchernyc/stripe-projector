import React from 'react'
import PropTypes from 'prop-types'

import {
  Slider as CompoundSlider,
  Handles,
  Tracks,
} from 'react-compound-slider'

import {
  sliderStyle,
  railStyle,
  handleStyle,
  trackStyle
} from './sliderStyles'

const Handle = ({
  handle: { id, percent },
  getHandleProps
}) => {
  // Second range slider handle points up.
  const rotationStyle =
    id.substr(-1) === '0'
      ? null
      : {
        transform: 'rotate(180deg)',
        marginTop: 0
      }

  return (
    <div
      style={{
        left: `${percent}%`,
        ...handleStyle,
        ...rotationStyle
      }}
      {...getHandleProps(id)} // eslint-disable-line react/jsx-props-no-spreading
    />
  )
}

const Track = ({
  source,
  target,
  getTrackProps
}) => (
  <div
    style={{
      left: `${source.percent}%`,
      width: `${target.percent - source.percent}%`,
      ...trackStyle
    }}
    {...getTrackProps()} // eslint-disable-line react/jsx-props-no-spreading
  />
)

const Slider = (props) => {
  const { values, onChange } = props

  return (
    <CompoundSlider
      mode={2}
      step={1}
      domain={[values.min, values.max]}
      values={[values.low, values.high]}
      rootStyle={sliderStyle}
      onChange={onChange}
    >
      <div style={railStyle} />

      <Handles>
        {({ handles, getHandleProps }) => (
          <div>
            {handles.map((handle) => (
              <Handle
                key={handle.id}
                handle={handle}
                getHandleProps={getHandleProps}
              />
            ))}
          </div>
        )}
      </Handles>

      <Tracks left={false} right={false}>
        {({ tracks, getTrackProps }) => (
          <div className="slider-tracks">
            {tracks.map(({ id, source, target }) => (
              <Track
                key={id}
                source={source}
                target={target}
                getTrackProps={getTrackProps}
              />
            ))}
          </div>
        )}
      </Tracks>
    </CompoundSlider>
  )
}

Slider.propTypes = {
  values: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    low: PropTypes.number.isRequired,
    high: PropTypes.number.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired
}

Handle.propTypes = {
  handle: PropTypes.shape({
    id: PropTypes.string.isRequired,
    percent: PropTypes.number.isRequired
  }).isRequired,
  getHandleProps: PropTypes.func.isRequired
}

Track.propTypes = {
  source: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
  }).isRequired,
  target: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
  }).isRequired,
  getTrackProps: PropTypes.func.isRequired
}

export default Slider
