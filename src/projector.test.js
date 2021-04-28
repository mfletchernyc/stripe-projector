import React from 'react'
import { shallow } from 'enzyme'

import Projector from './Projector'
import { randomInteger, randomRange } from './app/randomThings'

describe('Projector rendering...', () => {
  it('renders without error', () => {
    shallow(<Projector />)
  })
})

describe('randomThings creation...', () => {
  it('returns a random integer within requested (inclusive) limits', () => {
    const randomInt = randomInteger(0, 1)

    expect(Number.isInteger(randomInt)).toBe(true)

    expect(randomInt).toBeGreaterThanOrEqual(0)
    expect(randomInt).toBeLessThanOrEqual(1)

    expect(randomInteger(0, 0)).toEqual(0)

    expect(() => { randomInteger(0) }).toThrow()
    expect(() => { randomInteger(1, 0) }).toThrow()
    expect(() => { randomInteger(':)', 0) }).toThrow()
  })

  it('returns two sorted random ints within requested (incl) limits', () => {
    const randomInts = randomRange(0, 9)

    expect(randomInts instanceof Array).toBe(true)

    expect(randomInts[0]).toBeGreaterThanOrEqual(0)
    expect(randomInts[0]).toBeLessThanOrEqual(9)
    expect(randomInts[1]).toBeGreaterThanOrEqual(0)
    expect(randomInts[1]).toBeLessThanOrEqual(9)
    expect(randomInts[0]).toBeLessThan(randomInts[1])

    expect(randomRange(0, 1)).toEqual([0, 1])

    expect(() => { randomRange(0) }).toThrow()
    expect(() => { randomRange(0, 0) }).toThrow()
    expect(() => { randomRange(1, 0) }).toThrow()
    expect(() => { randomRange(':)', 0) }).toThrow()
  })
})

describe('Projector pending...', () => {
  it('needs more tests', () => {
    // It does...
  })
})
