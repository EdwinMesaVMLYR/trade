import React, { useState, useEffect, Fragment } from 'react'
import { Banner, Login, Select } from '../../Components/index'
import CardItems from './CardItems/CardItems'
import { useReadProducts, useReadBanner, useCookieValidate } from '../../Hooks/'
import { removeCapitalSpace } from '../../utils'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import imgecatalogo from '../../images/catalogo.svg'

const useListSelect = (arraylist, value) => {
  const auxArray = []
  if (value === 'brand') {
    arraylist.map((lis) => auxArray.push(lis.marca))
  } else if (value === 'category') {
    arraylist.map((lis) => auxArray.push(lis.categoria))
  }
  const listSelect = [...new Set(auxArray)]
  return listSelect
}

function Card () {
  const locationUrl = useLocation().pathname
  localStorage.setItem('url', locationUrl)

  const navigate = useNavigate()
  const { acronym } = useParams()

  let p = []
  const [product, setProduct] = useState([])
  const products = useReadProducts(acronym)

  const [isLogin, setIsLogin] = useState(false)
  const [selected, setSelected] = useState({})

  const banners = useReadBanner(acronym)
  const [isBanner, setIsBanner] = useState(false)
  const [bannerItem, setBannerItem] = useState({})

  const [listbrand, setListBrand] = useState([])
  const [listcategory, setListCategory] = useState([])

  const handleChange = event => {
    if (event.target.value === 'all') {
      const initP = products.map(p => p)
      const category = useListSelect(products, 'category')

      setBannerItem('')
      setIsBanner(false)
      setProduct(initP)
      setListCategory(category)
    } else {
      p = products.filter((e) => removeCapitalSpace(e.marca) === event.target.value)
      const category = useListSelect(p, 'category')

      setBannerItem(banners.filter((e) => e.keymain === event.target.value))
      setIsBanner(true)
      setProduct(p)
      setListCategory(category)
    }
    setSelected(event.target.value)
  }
  const handleChange2 = event => {
    if (event.target.value === 'all') {
      const brand = useListSelect(products, 'brand')
      const initP = products.map(p => p)

      setBannerItem('')
      setIsBanner(false)
      setProduct(initP)
      setListBrand(brand)
    } else {
      p = products.filter((e) => removeCapitalSpace(e.keycat) === event.target.value)
      const brand = useListSelect(p, 'brand')

      setBannerItem('')
      setIsBanner(false)
      setProduct(p)
      setListBrand(brand)
    }
    setSelected(event.target.value)
  }

  if (product.length <= 0 && isBanner) {
    navigate('/404')
  }
  if (bannerItem.length <= 0 && isBanner) {
    navigate('/404')
  }

  useEffect(() => {
    const validateLogin = async () => {
      const loginIs = await useCookieValidate(acronym)
      setIsLogin(loginIs)
    }
    const brand = useListSelect(products, 'brand')
    const category = useListSelect(products, 'category')
    const initP = products.map(p => p)

    setListBrand(brand)
    setListCategory(category)
    validateLogin()
    setProduct(initP)
  }, [products])

  const getMarkup = () => {
    let markup = ''
    if (!isLogin) {
      markup = <Login setIsLogin={setIsLogin}/>
    } else {
      markup =
      <div>
        {isBanner && <Banner bannerItem={bannerItem[0]}/> }
        <div className='filter-content 2xl:max-w-screen-xl mx-auto'>
          <div className='filter-content--header'>
            <div className='filter-content--header__image'>
              <img src={imgecatalogo} alt="image aca" className='filter-content--header__image--src' />
            </div>
            <div className='filter-content--header__title'>
              <h2 className='filter-content--header__title--text'>{acronym}</h2>
              </div>
            <div className='filter-content--filter'>
              <Select list={listbrand} selected={selected} handleChange={handleChange} text='Todas las marcas'/>
              <Select list={listcategory} selected={selected} handleChange={handleChange2} text='Todas las categorias'/>
            </div>
          </div>
        </div>
        <div className='filter-content--card'>
          {setSelected}
          {product && product.map((article, i) => (
            <CardItems {...article} key={i}></CardItems>
          ))}
        </div>
      </div>
    }
    return markup
  }
  return <Fragment>{getMarkup()}</Fragment>
}
export default Card
