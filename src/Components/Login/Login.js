import React from 'react'
import { useForm } from 'react-hook-form'
import logo from '../../logo.svg'
import imgecatalogotrans from '../../images/logo-white.svg'

export default function Login () {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data)

  console.log(watch('example')) // watch input value by passing the name of it

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
            {/* register your input into the hook by invoking the 'register' function */}
            {/* include validation with required or other standard HTML validation rules */}
            <input className='form-input-default' defaultValue='Correo electrónico' {...register('exampleRequired', { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>Este campo es requerido</span>}
            <input className='bg-yellow form-btn-start-sesion' value="Iniciar sesión" type='submit' />
            <a className='form-btn-forgot-passwprd' href='/'>Olvidé Contraseña</a>
          </form>
        </div>
      </div>
    </div>
  )
}
