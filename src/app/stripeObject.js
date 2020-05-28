import { randomInteger } from './randomThings'

const stripeObject = (id, colors, settings) => {
  let {
    position,
    direction,
    opacity,
    width
  } = settings

  const color = colors[randomInteger(0, colors.length - 1)]

  position = randomInteger(position.min, position.max)
  direction = randomInteger(direction.min, direction.max) / 100
  opacity = randomInteger(opacity.low, opacity.high) / 100
  width = randomInteger(width.low, width.high)

  return {
    id,
    position,
    direction,
    color,
    opacity,
    width
  }
}

export default stripeObject
