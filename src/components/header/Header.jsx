import React from 'react'
import './styleHeader.scss';
import Navbar from '../navbar/Navbar';
import { Outlet } from 'react-router-dom'



const Header = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>

  )
}

export default Header