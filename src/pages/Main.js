import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Main = () => {

  const navigate = useNavigate()

  return <div className="py-8 w-full">
    <div className="px-8 mb-4 text-gray-600">
      <div className="flex justify-between">
        <div className="p-3">
          <h1 className="text-4xl text-gray-900 mb-1">86</h1>
          <p className="text-sm">Stok Produk</p>
        </div>
        <div className="p-3">
          <h1 className="text-4xl text-gray-900 mb-1">23</h1>
          <p className="text-sm">Produk Terjual</p>
        </div>
        <div className="p-3">
          <h1 className="text-4xl text-gray-900 mb-1">Rp 84.000.000</h1>
          <p className="text-sm">Total Pendapatan Bulan Ini</p>
        </div>
      </div>
      
    </div>
    <div className="px-8 text-gray-700">
      <table className="w-full">
        <thead>
          <tr className="border-y-2 border-gray-700 font-medium border-opacity-30">
            <td className="py-3">Admin</td>
            <td className="py-3">Produk</td>
            <td className="py-3">Status</td>
            <td className="py-3">Tanggal</td>
          </tr>
        </thead>
        <tbody>
          <tr  
            className="hover:bg-gray-200" 
            onClick={() => {
              navigate('/products/')
            }}
          >
            <td className="py-2">Bambang</td>
            <td>12</td>
            <td className="text-green-500">terjual</td>
            <td>02/01/2022</td>
          </tr>
          <tr className="hover:bg-gray-200">
            <td className="py-2">Sudrajat</td>
            <td>6</td>
            <td className="text-blue-500">masuk</td>
            <td>13/01/2022</td>
          </tr>
          <tr className="hover:bg-gray-200">
            <td className="py-2">Bambang</td>
            <td>11</td>
            <td className="text-green-500">terjual</td>
            <td>20/01/2022</td>
          </tr>
        </tbody>
        </table>
        <div className="mt-5 flex justify-center items-center text-gray-500">
          <button className="w-8 hover:text-gray-700">
            <ChevronLeftIcon/>
          </button>
          <span className="rounded-full mx-3 p-1 bg-gray-300 text-gray-900">1</span>
          <button className="w-8 hover:text-gray-700">
            <ChevronRightIcon/> 
          </button>
        </div>
    </div>
  </div>;
};

export default Main;
