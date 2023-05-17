import React from 'react'
// import { NavLink } from 'react-router-dom';
import './styleNavbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav>
      <div>
        <span>AIRTICKETS</span>
        <span><FontAwesomeIcon icon={faPlaneDeparture} style={{ color: "#f9fafb", }} /></span>
      </div>

      <ul>
        <li>
          <button className='btn__link'>
            LogIn
          </button>

        </li>

      </ul>
    </nav>
  )
}

export default Navbar