import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Main from "../pages/Main";
import Sidebar from "../components/Sidebar";
import Products from "../pages/Products";

const Router = () => {
  return <BrowserRouter>
    <div className="flex">
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
     
  </BrowserRouter>;
}

export default Router;
