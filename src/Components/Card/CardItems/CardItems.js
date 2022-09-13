import React, { useState, useEffect } from 'react'
import { number, string } from 'prop-types'
import { useLogoBrans } from '../../../Hooks/'
function CardItems ({ marca, size, descripcion, grados, cajaporpallet, url }) {
  const logosBrands = useLogoBrans()

  const [imgBrand, setImgBrand] = useState([])

  useEffect(() => {
    const imageBrand = logosBrands.filter((e) => e.marca === marca)
    if (imageBrand.length > 0) {
      setImgBrand(imageBrand[0].urlimagen)
    } else {
      setImgBrand('')
    }
  })
  return (
    <div className='card-product'>
      <div className='card-product--logo'>
        <img src={imgBrand} alt="img prdducto" className='card-product--logo__image' />
      </div>
      <div className='card-product--image hover:from-gray-200 to-transparent bg-gradient-to-t'>
        <img src={url} alt="img prdducto" className='card-product__image'/>
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
          {cajaporpallet ? (<p className='card-product--description__text'>{cajaporpallet} cajas por pallet</p>) : null }
        </div>
      </div>
    </div>
  )
}

CardItems.propTypes = {
  marca: string.isRequired,
  size: number.isRequired,
  descripcion: string.isRequired,
  grados: number.isRequired,
  cajaporpallet: number.isRequired,
  url: string
}

export default CardItems
