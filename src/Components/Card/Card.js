import React from 'react'
import CardItems from './CardItems/CardItems'

function Card () {
  return (
    <div>
      <div className='image'>
        <img src="image aca" alt="image aca"/>
      </div>
      <h2>Catalogo</h2>
      <select name="select">
        <option value="value1">Value 1</option>
        <option value="value2" selected>Value 2</option>
        <option value="value3">Value 3</option>
      </select>
      <CardItems />
      <CardItems />
      <CardItems />
    </div>
  )
}

export default Card
