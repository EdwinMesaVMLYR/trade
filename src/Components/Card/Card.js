import React from 'react'
import CardItems from './CardItems/CardItems'
import { useReadCsv } from '../../Hooks/'

function Card () {
  const data = useReadCsv(3)
  console.log(data, 'csvData')
  return (
    <div>
      <div className='image'>
        <img src="image aca" alt="image aca"/>
      </div>
      <h2>Catalogo</h2>
      <CardItems />
      <CardItems />
      <CardItems />
    </div>
  )
}

export default Card
