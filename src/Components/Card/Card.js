import React, { useState } from 'react'
import imgecatalogo from '../../images/catalogo.svg'
import { Banner } from '../../Components/index'
import CardItems from './CardItems/CardItems'
import { userReadXlsx, userReadBannerXlsx } from '../../Hooks/'
import Select from '../Select/Select'
// import { removeCaptitalSpace } from '../../utils/'

function Card () {
  const products = userReadXlsx()
  const productsInfo = []
  products.map((cat) => productsInfo.push(cat.marca))
  const productsMarca = [...new Set(productsInfo)]
  const [selected, setSelected] = useState({})
  const [product, setProduct] = useState({})
  const [bannerItem, setBannerItem] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const banners = userReadBannerXlsx(setSelected)

  const handleChange = event => {
    setSelected(event.target.value)
    /* const marcaselet = removeCaptitalSpace(event.target.value)
    console.log(marcaselet) */
    const banner = banners.filter((e) => e.marca === event.target.value)
    const product = products.filter((e) => e.marca === event.target.value)
    setProduct(product)
    setBannerItem(banner[0])
    setIsLoading(true)
  }
  return (
    <>
    {isLoading ? <Banner bannerItem={bannerItem}/> : null}
    <div className='filter-content 2xl:max-w-screen-xl mx-auto'>
      <div className='filter-content--header'>
        <div className='filter-content--header__image'>
          <img src={imgecatalogo} alt="image aca" className='filter-content--header__image--src' />
        </div>
        <div className='filter-content--header__title'>
          <h2 className='filter-content--header__title--text'>SPMK</h2>
          </div>
          <Select productsMarca={productsMarca} selected={selected} handleChange={handleChange}/>
      </div>
      <div className='filter-content--card'>
        {setSelected}
        {isLoading === false
          ? products.map((article, i) => (
              <CardItems {...article} key={i}></CardItems>
          ))
          : product.map((article, i) => (
            <CardItems {...article} key={i}></CardItems>
          ))}
      </div>
    </div></>
  )
}

export default Card
