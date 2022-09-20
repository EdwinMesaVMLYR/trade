import React, { useEffect, useState, Fragment } from 'react'
import imagePyramide from '../../images/pyramide.jpg'
import { useCookieValidate } from '../../Hooks/'

function Pyramid () {
  const [isLogin, setIsLogin] = useState(Boolean)
  useEffect(() => {
    const validateLogin = async () => {
      const url = localStorage.getItem('url')
      const loginIs = await useCookieValidate(url.replace('/', ''))
      setIsLogin(loginIs)
    }
    validateLogin()
  }, [])

  let markup = ''
  if (!isLogin) {
    markup = <div>Debes realizar el login</div>
  } else {
    markup =
    <div className='pyramide 2xl:max-w-screen-xl mx-auto'>
      <div className='pyramide-header'>PIRÁMIDE DE PRECIOS</div>
      <div className='pyramide-image'>
        <img src={imagePyramide} alt="Pirámide de Precios" className='pyramide-image--src' />
      </div>
    </div>
  }
  return <Fragment>{markup}</Fragment>
}
export default Pyramid
