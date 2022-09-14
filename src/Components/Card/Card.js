import React, { useState, useEffect } from 'react'
import { Banner, Login, Select } from '../../Components/index'
import CardItems from './CardItems/CardItems'
import { useReadProducts, useReadBanner } from '../../Hooks/'
import { removeCapitalSpace } from '../../utils'
import { useParams, useNavigate } from 'react-router-dom'

function Card () {
  const navigate = useNavigate()
  const { acronym } = useParams()
  const [isLogin, setIsLogin] = useState(true)
  const products = useReadProducts(acronym)
  const productsInfo = []
  const [selected, setSelected] = useState({})
  const [product, setProduct] = useState({})
  const [bannerItem, setBannerItem] = useState({})
  const [isBanner, setIsBanner] = useState(false)
  const banners = useReadBanner(acronym)
  products.map((cat) => productsInfo.push(cat.marca))
  const productsMarca = [...new Set(productsInfo)]
  const handleChange = event => {
    let product = []
    if (event.target.value === 'all') {
      setBannerItem('')
      setIsBanner(false)
    } else {
      product = products.filter((e) => removeCapitalSpace(e.marca) === event.target.value)
      setBannerItem(banners.filter((e) => e.keymain === event.target.value))
      setIsBanner(true)
    }
    setProduct(product)
    setSelected(event.target.value)
  }
  if (product.length <= 0 && isBanner) {
    navigate('/404')
  }
  if (bannerItem.length <= 0 && isBanner) {
    navigate('/404')
  }
  useEffect(() => {
    document.cookie.replace(/(?:(?:^|.*;\s*)loginopen\s*\s*([^;]*).*$)|^.*$/, '$1') ? setIsLogin(false) : setIsLogin(true)
  }, [])

  const getMarkup = () => {
    let markup = ''
    if (isLogin) {
      markup = <Login setIsLogin={setIsLogin}/>
    } else {
      markup =
      <div>
        {isBanner && <Banner bannerItem={bannerItem[0]}/> }
        <Select productsMarca={productsMarca} selected={selected} handleChange={handleChange}/>
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
    }
    return markup
  }

  return <div>{getMarkup()}</div>
}

export default Card
