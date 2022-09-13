import React from 'react'
import imagePyramide from '../../images/pyramide.jpg'

function Pyramid () {
  return (
    <div className='pyramide'>
      <div className='pyramide-header'>PIRÁMIDE DE PRECIOS</div>
      <div className='pyramide-image'>
        <img src={imagePyramide} alt="Pirámide de Precios" className='pyramide-image--src' />
      </div>
    </div>
  )
}
export default Pyramid
