import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import App from "../components/app/App";
import MainServices from '../components/mainServices/MainServices';
import NotFound from '../components/notfound/NotFound';


const AppRouter = () => {
    
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} exact element={<Layout />}>
          <Route index element={<App/>} />
          <Route path={"fligth"} element={<MainServices />} />

        </Route>
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default AppRouter