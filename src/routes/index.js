import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Main from "../pages/Main";
import Sidebar from "../components/Sidebar";

const Router = () => {
  return <BrowserRouter>
    <Routes>
      <Route
        path="/" 
        element={(
          <div className="flex min min-h-screen">
          <Sidebar/>
          <Main/>
          </div>
        )}
      />
    </Routes>  
  </BrowserRouter>;
}

export default Router;
