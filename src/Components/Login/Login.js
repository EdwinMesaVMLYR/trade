import React from 'react'
import { useForm } from 'react-hook-form'
import { useUsers } from '../../Hooks/'

export default function Login () {
  const user = useUsers()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    const email = user.filter((e) => e.MAIL === data.example)
    if (email.length > 0) {
      console.log('isLogin')
    } else {
      console.log('noLogin')
    }
    console.log(data)
  }

  return (
    /* 'handleSubmit' will validate your inputs before invoking 'onSubmit' */
    <form onSubmit={handleSubmit(onSubmit)} >
      {/* register your input into the hook by invoking the 'register' function */}
      <input defaultValue='test' {...register('example')} />
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register('exampleRequired', { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <input type='submit' />
    </form>
  )
}
