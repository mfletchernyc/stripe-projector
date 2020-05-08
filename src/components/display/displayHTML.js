import React from 'react'
import parse from 'html-react-parser'

export const stripesHTML = (stripes, styles, type) => stripes.map((stripe) => {
  const background = type === 'sharp'
    ? stripe.color
    : `linear-gradient(to right, #00000000, ${stripe.color}, #00000000)`

  return (
    <div
      key={stripe.id}
      className={styles.stripe}
      style={{
        background,
        opacity: stripe.opacity,
        width: `${stripe.width}%`,
        left: `${stripe.position - stripe.width / 2}%`
      }}
    />
  )
})

const stripeListHTML = (json, styles) => {
  const stripesArray = JSON.stringify(json).split(',{')
  let stripesList = ''

  stripesArray.forEach((el) => {
    let stripe = el
    const color = stripe.match(/#[0-9a-f]{6}/)

    stripe = stripe
      .replace(/[[\]]/g, '')
      .replace(/:/g, ': ')
      .replace(/,/g, '<br />')
      .replace(/}/g, `<hr class=${styles.hr}>`)
      .replace(/[{]/g, '')
      .replace('"color":', `"color": <span class="${styles.swatch}" style="background: ${color}"></span>`)

    stripesList += stripe
  })

  return stripesList
}

export const infoHTML = (stripes, background, styles) => (
  <div className={styles.info}>
    {'background: '}
    <span className={styles.swatch} style={{ background }} />
    {` "${background}"`}
    <br />
    <hr className={styles.hr} />
    {stripes.length}
    {' stripes...'}
    <br />
    {parse(stripeListHTML(stripes, styles))}
  </div>
)
