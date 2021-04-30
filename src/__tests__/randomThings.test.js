import * as rt from '../app/randomThings'

const hexColorRegExp = /^#[a-f0-9]{6}$/

describe('random number generation...', () => {
  it('returns random int within requested (inclusive) limits', () => {
    const randomInteger = rt.randomInteger(0, 1)

    expect(Number.isInteger(randomInteger)).toBe(true)

    expect(randomInteger).toBeGreaterThanOrEqual(0)
    expect(randomInteger).toBeLessThanOrEqual(1)

    expect(rt.randomInteger(0, 0)).toEqual(0)
  })

  it('returns sorted array of two random ints within req (incl) limits', () => {
    const randomRange = rt.randomRange(0, 9)

    expect(randomRange instanceof Array).toBe(true)

    expect(randomRange[0]).toBeGreaterThanOrEqual(0)
    expect(randomRange[0]).toBeLessThanOrEqual(9)
    expect(randomRange[1]).toBeGreaterThanOrEqual(0)
    expect(randomRange[1]).toBeLessThanOrEqual(9)
    expect(randomRange[0]).toBeLessThan(randomRange[1])

    expect(rt.randomRange(0, 1)).toEqual([0, 1])
  })
})

describe('random color generation...', () => {
  it('returns random hex color', () => {
    expect(rt.randomColor()).toEqual(
      expect.stringMatching(hexColorRegExp)
    )
  })

  it('returns array of random hex colors, length within req (incl) limits', () => {
    const randomColorArray = rt.randomColorArray(1, 9)

    expect(randomColorArray instanceof Array).toBe(true)

    randomColorArray.forEach((color) => {
      expect(color).toEqual(
        expect.stringMatching(hexColorRegExp)
      )
    })

    expect(randomColorArray.length).toBeGreaterThanOrEqual(1)
    expect(randomColorArray.length).toBeLessThanOrEqual(9)
  })
})

describe('random thing generation error handling...', () => {
  const invalidParams = [
    ['randomInteger', 'undefined param', 0, undefined],
    ['randomInteger', 'min > max', 1, 0],
    ['randomInteger', 'wrong type param', ':(', 0],
    ['randomRange', 'undefined param', 0, undefined],
    ['randomRange', 'equal min and max', 0, 0],
    ['randomRange', 'min > max', 1, 0],
    ['randomRange', 'wrong type param', ':(', 0],
    ['randomColorArray', 'undefined param', 1, undefined],
    ['randomColorArray', 'zero as param', 0, 1],
    ['randomColorArray', 'min > max', 2, 1],
    ['randomColorArray', 'wrong type param', ':(', 1]
  ]

  it.each(invalidParams)(
    'errors when calling %s() with %s',
    (func, _x, first, second) => {
      expect(() => { rt[func](first, second) }).toThrow()
    }
  )
})
