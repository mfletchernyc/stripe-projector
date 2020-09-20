import stripeObject from './stripeObject'

const initialStripes = (settings, colors) => {
  const { population } = settings
  const stripes = []

  for (let id = 0; id < population; id += 1) {
    stripes.push(stripeObject(id, colors, settings))
  }

  return stripes
}

export default initialStripes
