import React from 'react'
import { string } from 'prop-types'
import logoc from '../../../images/logoc.png'

function CardItems ({ marca, size, grados, url, cajaporpallet, descripcion }) {
  return (
    <div className='card-product'>
      <div className='card-product--logo'>
        <img src={logoc} alt="img prdducto" className='card-product--logo__image'/>
      </div>
      <div className='card-product--image'>
        <img src={url} alt="img prdducto" className='card-product--image__image'/>
      </div>
      <div className='card-product--body'>
        <div className='card-product--info'>
          <p className='card-product--info__title'>{descripcion}</p>
          {marca}
          <p className='card-product--info__alc'>{grados}%</p>
        </div>
        <div className='card-product--size'>
          <p className='card-product--size__text'>{size}</p>
        </div>
        <div className='card-product--description'>
          <p className='card-product--description__text'>Cajas por pallet {cajaporpallet}</p>
        </div>
      </div>
    </div>
  )
}

CardItems.defaultProps = {
  marca: ''
}

CardItems.propTypes = {
  marca: string.isRequired,
  size: string.isRequired,
  grados: string.isRequired,
  url: string,
  cajaporpallet: string.isRequired,
  descripcion: string.isRequired
}

export default CardItems
