import React from 'react'
import CardItems from './CardItems/CardItems'
import { useReadCsv } from '../../Hooks/'

function Card () {
  const products = useReadCsv('SPMK')
  console.log(products, 'product')
  console.log(products[0], 'product')
  console.log(products[0].length, 'product')
  return (
    <div>
      <div className='image'>
        <img src="image aca" alt="image aca"/>
      </div>
      <h2>Catalogo</h2>
      {products.map((article, i) => (
        <CardItems {...article} key={i}></CardItems>
      ))}
    </div>
  )
}

export default Card
