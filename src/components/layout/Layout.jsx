import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../home/navbar/Navbar'
import Footer from '../home/footer/Footer'

const Layout = () => {
  return (
      <div>
          <Navbar/>
          <Outlet/>
          <Footer/>
    </div>
  )
}

export default Layout