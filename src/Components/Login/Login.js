import React from 'react'
import { func } from 'prop-types'
import { useForm } from 'react-hook-form'
import { useUsers } from '../../Hooks/'
import logo from '../../logo.svg'
import imgecatalogotrans from '../../images/logo-white.svg'

export default function Login ({ setIsLogin }) {
  const user = useUsers()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    const email = user.filter((e) => e.MAIL === data.email)
    if (email.length > 0) {
      setIsLogin(false)
      window.localStorage.setItem('login', 'true')
    } else {
      setIsLogin(true)
    }
  }

  return (
    /* 'handleSubmit' will validate your inputs before invoking 'onSubmit' */
    <div className='login-container 2xl:max-w-screen-2xl mx-auto'>
      <div className='login-container-navbar'></div>
      <div className='login-container-body'>
        <div className='login-container-body--logo'>
          <img src={imgecatalogotrans} alt="image aca" className='filter-content--header__image--src' />
        </div>
        <div className='login-container-body--form'>
          <form onSubmit={handleSubmit(onSubmit)} className='login-container-body--form__container'>
            <img src={logo} alt="image aca" className='login-container-body--form__container__image--src' />
            <input className='form-input-default' placeholder='Correo electrónico' {...register('email', { required: true })} />
            {errors.exampleRequired && <span>Este campo es requerido</span>}
            <input className='bg-yellow form-btn-start-sesion' value="Iniciar sesión" type='submit' />
            <a className='form-btn-forgot-passwprd' href='/'>Olvidé Contraseña</a>
          </form>
        </div>
      </div>
    </div>
  )
}
Login.propTypes = {
  setIsLogin: func.isRequired
}
