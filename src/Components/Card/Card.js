import React from 'react'
import imgecatalogo from '../../images/catalogo.svg'
import CardItems from './CardItems/CardItems'

function Card () {
  return (
    <div className='filter-content 2xl:max-w-screen-xl mx-auto'>
      <div className='filter-content--header'>
        <div className='filter-content--header__image'>
          <img src={imgecatalogo} alt="image aca" className='filter-content--header__image--src'/>
        </div>
        <div className='filter-content--header__title'>
          <h2 className='filter-content--header__title--text'>SPMK</h2>
        </div>
        <div className='filter-content--filter'>
          <select name="select">
            <option value="value1">Value 1</option>
            <option value="value2" selected>Value 2</option>
            <option value="value3">Value 3</option>
          </select>
        </div>
      </div>
      <div className='filter-content--card'>
        <CardItems />
        <CardItems />
        <CardItems />
        <CardItems />
      </div>
    </div>
  )
}

export default Card
