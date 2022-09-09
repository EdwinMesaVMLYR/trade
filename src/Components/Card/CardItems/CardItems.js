import React from 'react'
import { number, string } from 'prop-types'
import logoc from '../../../images/logoc.png'
import { useLogoBrans } from '../../../Hooks/'
function CardItems ({ size, descripcion, grados, cajaporpallet, url }) {
  const logo = useLogoBrans()
  console.log(logo)
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
          <p className='card-product--info__alc'>{grados} Alc</p>
        </div>
        <div className='card-product--size'>
          {size === 'LITRO'
            ? <p className='card-product--size__text'>LITRO</p>
            : <p className='card-product--size__text'>{size} cc</p>
          }
        </div>
        <div className='card-product--description'>
          <p className='card-product--description__text'>{cajaporpallet} cajas por pallet</p>
        </div>
      </div>
    </div>
  )
}

CardItems.propTypes = {
  marca: string.isRequired,
  size: string,
  descripcion: string.isRequired,
  grados: number.isRequired,
  cajaporpallet: string,
  url: string
}

export default CardItems
