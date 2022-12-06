import React, { useState, useEffect } from 'react'
import { number, string, oneOfType } from 'prop-types'
import { useLogoBrans } from '../../../Hooks/'
import { useParams } from 'react-router-dom'
function CardItems ({ keymain, tamano, descripcion, grados, eanintermedio, cajasporpallet, imagen }) {
  const logosBrands = useLogoBrans()
  const [imgBrand, setImgBrand] = useState([])
  const { acronym } = useParams()

  useEffect(() => {
    const imageBrand = logosBrands.filter((e) => e.keymain === keymain)
    if (imageBrand.length > 0) {
      setImgBrand(imageBrand[0].urlimagen)
    } else {
      setImgBrand('')
    }
  })
  return (
    <div className='card-product'>
      {imgBrand && <div className='card-product--logo'><img src={imgBrand} alt={descripcion} className='card-product--logo__image' />
      </div>}
      <div className='card-product--image hover:from-gray-200 to-transparent bg-gradient-to-t'>
        {imagen && <img src={imagen} alt="img prdducto" className='card-product__image'/>}
      </div>
      <div className='card-product--body'>
        <div className='card-product--info'>
          {descripcion && <p className='card-product--info__title'>{descripcion}</p>}
          {grados && <p className='card-product--info__alc'>{grados} Alc</p>}
        </div>
        <div className='card-product--size'>
          {tamano === 'LITRO'
            ? <p className='card-product--size__text'>LITRO</p>
            : <p className='card-product--size__text'>{tamano} cc</p>
          }
        </div>
        <div className='card-product--description flex justify-between'>
          {cajasporpallet && (<p className='card-product--description__text'>{cajasporpallet} cajas por pallet</p>)}
          {acronym !== 'spmk' && <p className='card-product--description__text uppercase'>COD {acronym}: {eanintermedio}</p>}
        </div>
        {acronym === 'spmk' && <div className='card-product--barcode'>
          {eanintermedio && <img src={`https://barcode.tec-it.com/barcode.ashx?data=${eanintermedio.toString()}&code=Code128&translate-esc=on`} alt="img prdducto" className='card-product--barcode__image'/>}
        </div>}
      </div>
    </div>
  )
}
CardItems.defaultProps = {
  ean: '',
  size: ''
}

CardItems.propTypes = {
  marca: string.isRequired,
  keymain: string.isRequired,
  tamano: oneOfType([number, string]),
  descripcion: string.isRequired,
  grados: number.isRequired,
  eanintermedio: oneOfType([number, string]),
  cajasporpallet: oneOfType([number, string]),
  imagen: string
}

export default CardItems
