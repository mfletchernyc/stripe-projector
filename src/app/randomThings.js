const checkInputs = (min, max, unique) => {
  if (!Number.isInteger(min) || !Number.isInteger(max) || min > max) {
    throw new Error('Error: min/max params must be ints with max > min.')
  }

  if (unique && max === min) {
    throw new Error('Error: min/max params must be unique integers.')
  }
}

export const randomInteger = (min, max) => { // Inclusive.
  checkInputs(min, max)

  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const randomRange = (min, max) => {
  checkInputs(min, max, true)

  const x = randomInteger(min, max)
  const y = randomInteger(min, max)

  return x === y
    ? randomRange(min, max)
    : [x, y].sort((i, j) => i - j)
}

export const randomColor = () => `#${Math.floor(
  Math.random() * 16777215
).toString(16)}`

export const randomColorArray = (minLength, maxLength) => {
  const colors = []
  const total = minLength + Math.floor(Math.random() * (maxLength - minLength + 1))

  for (let x = 0; x < total; x += 1) {
    colors.push(randomColor())
  }

  return colors
}
