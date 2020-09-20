import { randomInteger } from './randomThings'

const stripeObject = (id, colors, settings) => {
  const {
    position,
    direction,
    opacity,
    width
  } = settings

  const randomColor = colors[randomInteger(0, colors.length - 1)]
  const randomPosition = randomInteger(position.min, position.max)
  const randomDirection = randomInteger(direction.min, direction.max) / 100
  const randomOpacity = randomInteger(opacity.low, opacity.high) / 100
  const randomWidth = randomInteger(width.low, width.high)

  return {
    id,
    color: randomColor,
    position: randomPosition,
    direction: randomDirection,
    opacity: randomOpacity,
    width: randomWidth
  }
}

export default stripeObject
