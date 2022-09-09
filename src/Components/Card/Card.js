import React, { useState, useEffect } from 'react'
import imgecatalogo from '../../images/catalogo.svg'
import { Banner, Login } from '../../Components/index'
import CardItems from './CardItems/CardItems'
import { userReadXlsx, userReadBannerXlsx } from '../../Hooks/'
import Select from '../Select/Select'

function Card () {
  const [isLogin, setIsLogin] = useState(true)
  const products = userReadXlsx()
  const productsInfo = []
  products.map((cat) => productsInfo.push(cat.marca))
  const productsMarca = [...new Set(productsInfo)]
  const [selected, setSelected] = useState({})
  const [product, setProduct] = useState({})
  const [bannerItem, setBannerItem] = useState({})
  const [isBanner, setIsBanner] = useState(false)
  const banners = userReadBannerXlsx(setSelected)

  const handleChange = event => {
    let product = []
    if (event.target.value === 'all') {
      setBannerItem('')
      setIsBanner(false)
    } else {
      product = products.filter((e) => e.marca === event.target.value)
      setBannerItem(banners.filter((e) => e.marca === event.target.value))
      setIsBanner(true)
    }
    setProduct(product)
    setSelected(event.target.value)
  }
  useEffect(() => {
    setIsLogin(true)
  }, [])
  return (
    <>
    { isLogin
      ? (<Login />)
      : (
        <>
          {isBanner && <Banner bannerItem={bannerItem[0]}/> }
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
              {isBanner === false
                ? products.map((article, i) => (
                    <CardItems {...article} key={i}></CardItems>
                ))
                : product.map((article, i) => (
                  <CardItems {...article} key={i}></CardItems>
                ))}
            </div>
          </div>
        </>
        )
    }
    </>
  )
}

export default Card
