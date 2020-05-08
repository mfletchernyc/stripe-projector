import { randomInteger } from './randomThings'

const stripeObject = (id, colors, settings) => {
  const {
    positionLimits,
    directionLimits,
    opacityLimits,
    widthLimits
  } = settings

  const position = randomInteger(positionLimits.min, positionLimits.max)
  const direction = randomInteger(directionLimits.min, directionLimits.max) / 100
  const color = colors[randomInteger(0, colors.length - 1)]
  const opacity = randomInteger(opacityLimits.low, opacityLimits.high) / 100
  const width = randomInteger(widthLimits.low, widthLimits.high)

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
