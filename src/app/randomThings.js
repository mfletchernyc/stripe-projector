export const randomInteger = (min, max) => ( // Inclusive.
  Math.floor(Math.random() * (max - min + 1)) + min
)

export const randomRange = (min, max) => {
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
