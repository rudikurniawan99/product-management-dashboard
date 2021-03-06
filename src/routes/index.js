import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Main from "../pages/Main";
import Sidebar from "../components/Sidebar";
import Products from "../pages/Products";
import Register from "../pages/Register";
import Login from "../pages/Login";

const Router = () => {
  return <BrowserRouter>
    <Routes>
      <Route
        path="/" 
        element={<HomeRouter/>}
      />
      <Route 
        path="/register"
        element={<Register/>} 
      />
      <Route
        path="/login"
        element={<Login/>}
      />
    </Routes>
     
  </BrowserRouter>;
}

export default Router;

const HomeRouter = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar/>
      <Routes>
        <Route
          path="/" 
          element={<Main/>}
        />
        <Route
          path="/products" 
          element={<Products/>}
        />
      </Routes>
    </div>
  )
}