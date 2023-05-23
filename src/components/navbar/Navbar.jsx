import React from 'react'
// import { NavLink } from 'react-router-dom';
import './styleNavbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/img/logoVoladores1.png'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <img src={logo} alt="" />
        {/* <span>AIRTICKETS</span>
        <span><FontAwesomeIcon icon={faPlaneDeparture} style={{ color: "#f9fafb", }} /></span> */}
      </div>
      <ul>
        <li>
          <button className='navbar__button'>
            LogIn
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
