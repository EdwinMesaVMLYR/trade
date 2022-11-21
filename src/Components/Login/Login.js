import React, { useState } from 'react'
import { func } from 'prop-types'
import { useForm } from 'react-hook-form'
import { useUsers, useCookie } from '../../Hooks/'
import logo from '../../logo.svg'
import { useParams } from 'react-router-dom'
import imgecatalogotrans from '../../images/logo-white.svg'
export default function Login ({ setIsLogin }) {
  const { acronym } = useParams()
  const user = useUsers(acronym)
  const [erroMails, setErroMails] = useState(true)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = async (data) => {
    const email = user.filter((e) => e.mail === data.email)
    if (email.length > 0) {
      setIsLogin(true)
      await useCookie(acronym, email)
    } else {
      setIsLogin(false)
      setErroMails(false)
    }
  }
  const goLogin = event => {
    setErroMails(true)
  }
  return (
    <>
      <div className='login-container 1xl:max-w-screen-2xl mx-auto'>
        <div className='login-container-navbar'></div>
        <div className='login-container-body'>
          <div className='login-container-body--logo'>
            <img src={imgecatalogotrans} alt="image aca" className='filter-content--header__image--src' />
          </div>
          <div className='login-container-body--form'>
            <form onSubmit={handleSubmit(onSubmit)} className='login-container-body--form__container'>
              <img src={logo} alt="image aca" className='login-container-body--form__container__image--src' />
              {erroMails && <input className='form-input-default' placeholder='Correo electrónico' {...register('email', { required: true, pattern: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/i })} />}
              {errors.email && <span>Este campo es un email y es requerido.</span>}
              {erroMails && <input className='bg-yellow form-btn-start-sesion' value="Iniciar sesión" type='submit' />}
              {erroMails !== true && <p className='pb-2 text-center'>ERROR</p>}
              {erroMails !== true && <button className='bg-yellow form-btn-start-sesion' onClick={goLogin}>Regresar a home</button>}
              {/* <a className='form-btn-forgot-passwprd' href='/'>Olvidé Contraseña</a> */}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
Login.propTypes = {
  setIsLogin: func.isRequired
}
