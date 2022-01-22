import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { object, string, ref } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

const registerSchema = object().shape({
  name: string().required(),
  email: string().email().required(),
  password: string().min(8).required(),
  passwordConfirmation: string().required()
    .oneOf([ref('password')], `password not match`)
})


const Register = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(registerSchema)
  })
  const onSubmit = data => {
    console.log(data)
  }

  const [isOpen, setIsOpen] = useState(false)
  return <div className="min-h-screen flex items-center justify-center">
    <div className="w-96">
      <h1 className="text-3xl mb-3">Buat akun baru</h1> 
      <div className="mb-8 flex text-sm text-gray-500">
        <p>sudah memiliki akun?  <span className="text-blue-500"><Link to="/login"> Login</Link></span></p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
          <div className="p-3 rounded-md border border-gray-300">
            <input 
              placeholder="Bambang Gunawan" 
              className="focus:outline-none w-full" 
              type="text" 
              {...register('name')}
            />
            <small className="text-red-500">{errors.name?.message}</small>
          </div>
          <div className="p-3 rounded-md border border-gray-300">
            <input 
              placeholder="bambang@gmail.com" 
              className="focus:outline-none w-full" 
              type="text" 
              {...register('email')}
            />
            <small className="text-red-500">{errors.email?.message}</small>
          </div>
          <div className="p-3 rounded-md border border-gray-300">
            <div className="flex items-center justify-between">
              <input 
                className="focus:outline-none w-full" 
                placeholder="********" 
                type={!isOpen ? 'password': 'text'} 
                {...register('password')}
              />
              <button className="w-5"
                type='button'
                onClick={() => {
                  setIsOpen(!isOpen)
                }}
              >
                {isOpen ? <EyeOffIcon/> : <EyeIcon/>}
              </button>
            </div>
            <small className="text-red-500">{errors.password?.message}</small>
          </div>
          <div className="p-3 rounded-md border border-gray-300">
            <input 
              className="focus:outline-none w-full" 
              placeholder="********" 
              type={!isOpen ? 'password': 'text'} 
              {...register('passwordConfirmation')}
            />
            <small className="text-red-500">{errors.passwordConfirmation?.message}</small>
          </div>
          <button type='submit' className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-md text-white">Daftar</button>
        </div>
      </form>
    </div> 
  </div>;
};

export default Register;
