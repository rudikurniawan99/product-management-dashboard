import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  const [isOpen, setIsOpen] = useState(false)
  return <div className="min-h-screen flex items-center justify-center">
    <div className="w-96">
      <h1 className="text-3xl mb-3">Login</h1> 
      <div className="mb-8 flex text-sm text-gray-500">
        <p>belum memiliki akun?  <span className="text-blue-500"><Link to="/register"> Register</Link></span></p>
      </div>
      <div className="space-y-6">
        <div className="p-3 rounded-md border border-gray-300">
          <input placeholder="bambang@gmail.com" className="focus:outline-none w-full" type="text" />
        </div>
        <div className="p-3 rounded-md border border-gray-300">
          <div className="flex items-center justify-between">
            <input className="focus:outline-none w-full" placeholder="********" type={!isOpen ? 'password': 'text'} />
            <button className="w-5"
              onClick={() => {
                setIsOpen(!isOpen)
              }} 
            >
              {isOpen ? <EyeOffIcon/> : <EyeIcon/>}
            </button>
          </div>
        </div>
        <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-md text-white">Daftar</button>
      </div>
    </div> 
  </div>;
};

export default Login;

