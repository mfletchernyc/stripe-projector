import * as rt from '../app/randomThings'

describe('random number generation...', () => {
  it('returns random int within requested (inclusive) limits', () => {
    const randomInteger = rt.randomInteger(0, 1)

    expect(Number.isInteger(randomInteger)).toBe(true)

    expect(randomInteger).toBeGreaterThanOrEqual(0)
    expect(randomInteger).toBeLessThanOrEqual(1)

    expect(rt.randomInteger(0, 0)).toEqual(0)
  })

  it('errors when requesting random int with invalid params', () => {
    expect(() => { rt.randomInteger(0) }).toThrow()
    expect(() => { rt.randomInteger(1, 0) }).toThrow()
    expect(() => { rt.randomInteger(':)', 0) }).toThrow()
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

  it('errors when requesting sorted random ints with invalid params', () => {
    expect(() => { rt.randomRange(0) }).toThrow()
    expect(() => { rt.randomRange(0, 0) }).toThrow()
    expect(() => { rt.randomRange(1, 0) }).toThrow()
    expect(() => { rt.randomRange(':)', 0) }).toThrow()
  })
})

describe('random color generation...', () => {
  it('returns random hex color', () => {
    expect(rt.randomColor()).toEqual(
      expect.stringMatching(/^#[a-f0-9]{6}$/)
    )
  })

  it('returns array of random hex colors, length within req (incl) limits', () => {
    const randomColorArray = rt.randomColorArray(1, 9)

    expect(randomColorArray instanceof Array).toBe(true)

    randomColorArray.forEach((color) => {
      expect(color).toEqual(
        expect.stringMatching(/^#[a-f0-9]{6}$/)
      )
    })

    expect(randomColorArray.length).toBeGreaterThanOrEqual(1)
    expect(randomColorArray.length).toBeLessThanOrEqual(9)
  })

  it('errors when req array of random hex colors with invalid params', () => {
    expect(() => { rt.randomColorArray(1) }).toThrow()
    expect(() => { rt.randomColorArray(0, 1) }).toThrow()
    expect(() => { rt.randomColorArray(2, 1) }).toThrow()
    expect(() => { rt.randomColorArray(':)', 1) }).toThrow()
  })
})
