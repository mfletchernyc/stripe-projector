import { randomInteger, randomRange } from './randomThings'

/* eslint no-multi-spaces: 0 */

const limits = {
  populationLimits: { // At least 1 to start?
    min: 1,
    max: 10
  },
  cycleTimeLimits: {  // Milliseconds.
    min: 100,
    max: 4000
  },
  moveTimeLimits: {   // Milliseconds.
    min: 1,
    max: 500
  },
  positionLimits: {   // Screen width percentage.
    min: 0,
    max: 100
  },
  directionLimits: {   // Screen width percentage.
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

const cycleTime = 1000  // TO DO: make random? Or keep
const moveTime = 100    // using these reasonable values?

const opacityRange = randomRange(limits.opacityLimits.min, limits.opacityLimits.max)
const widthRange = randomRange(limits.widthLimits.min, limits.widthLimits.max)

const initialSettings = {
  population,
  cycleTime: {
    ...limits.cycleTimeLimits,
    current: cycleTime
  },
  moveTime: {
    ...limits.moveTimeLimits,
    current: moveTime
  },
  position: limits.positionLimits,
  direction: limits.directionLimits,
  color: limits.colorLimits,
  opacity: {
    ...limits.opacityLimits,
    low: opacityRange[0],
    high: opacityRange[1]
  },
  width: {
    ...limits.widthLimits,
    low: widthRange[0],
    high: widthRange[1]
  }
}

export default initialSettings
