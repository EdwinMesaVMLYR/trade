import React from 'react'
import imgecatalogo from '../../images/catalogo.svg'
import { Banner } from '../../Components/index'
import CardItems from './CardItems/CardItems'
import { userReadXlsx } from '../../Hooks/'

function Card () {
  const products = userReadXlsx()
  return (
    <>
    <Banner/>
    <div className='filter-content 2xl:max-w-screen-xl mx-auto'>
      <div className='filter-content--header'>
        <div className='filter-content--header__image'>
          <img src={imgecatalogo} alt="image aca" className='filter-content--header__image--src' />
        </div>
        <div className='filter-content--header__title'>
          <h2 className='filter-content--header__title--text'>SPMK</h2>
        </div>
        <div className='filter-content--filter'>
          <select name="select">
            {products.map((cat, i) => (
              <option value={cat.marca} key={cat.id}>{cat.marca}</option>
            ))}
          </select>
        </div>
      </div>
      <div className='filter-content--card'>
        {products.map((article, i) => (
          <CardItems {...article} key={i}></CardItems>
        ))}
      </div>
    </div></>
  )
}

export default Card
