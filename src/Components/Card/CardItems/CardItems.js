import React from 'react'
import { string } from 'prop-types'

function CardItems ({ marca }) {
  return (
    <div>
      <div>log</div>
      <img src="" alt="img prdducto"/>
      <p>{marca}</p>
      <p>207 cc</p>
      <p>120 cajas por pallet</p>
    </div>
  )
}

CardItems.defaultProps = {
  marca: ''
}

CardItems.propTypes = {
  marca: string.isRequired
}

export default CardItems
