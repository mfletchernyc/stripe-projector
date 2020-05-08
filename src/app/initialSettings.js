import { randomInteger, randomRange } from './randomThings'

/* eslint no-multi-spaces: 0 */

const limits = {
  populationLimits: { // At least 1 to start?
    min: 1,
    max: 10
  },
  positionLimits: {   // Screen width percentage.
    min: 0,
    max: 100
  },
  directionLimits: {   // Same.
    min: -10,
    max: 10
  },
  colorLimits: {      // According to taste.
    min: 2,
    max: 5
  },
  opacityLimits: {    // Percentages.
    min: 5,
    max: 100
  },
  widthLimits: {      // Screen width percentage.
    min: 1,
    max: 100
  }
}

const population = randomInteger(limits.populationLimits.min, limits.populationLimits.max)
const opacityRange = randomRange(limits.opacityLimits.min, limits.opacityLimits.max)
const widthRange = randomRange(limits.widthLimits.min, limits.widthLimits.max)

const initialSettings = {
  cycleTime: 2,   // Seconds.
  moveTime: 0.05, // Same.
  population,
  positionLimits: limits.positionLimits,
  directionLimits: limits.directionLimits,
  colorLimits: limits.colorLimits,
  opacityLimits: {
    ...limits.opacityLimits,
    low: opacityRange[0],
    high: opacityRange[1]
  },
  widthLimits: {
    ...limits.widthLimits,
    low: widthRange[0],
    high: widthRange[1]
  }
}

export default initialSettings
