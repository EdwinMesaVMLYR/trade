import React from 'react'
import { string } from 'prop-types'
import bottle from '../../../images/bottle.png'
import logoc from '../../../images/logoc.png'

function CardItems ({ marca }) {
  return (
    <div className='card-product'>
      <div className='card-product--logo'>
        <img src={logoc} alt="img prdducto" className='card-product--logo__image'/>
      </div>
      <div className='card-product--image'>
        <img src={bottle} alt="img prdducto" className='card-product--image__image'/>
      </div>
      <div className='card-product--body'>
        <div className='card-product--info'>
          <p className='card-product--info__title'>marca</p>
          <p className='card-product--info__alc'>4.5 Alc</p>
        </div>
        <div className='card-product--size'>
          <p className='card-product--size__text'>207 cc</p>
        </div>
        <div className='card-product--description'>
          <p className='card-product--description__text'>120 cajas por pallet</p>
        </div>
      </div>
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
