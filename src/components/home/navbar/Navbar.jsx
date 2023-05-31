import React from 'react'
import './styleNavbar.scss';
import logo from '../../../assets/img/logoVoladores1.png'
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleToHome = () => {
    navigate('/');
  }
  return (
    <header>
      <nav className='navbar'>
        <div className='navbar__logo'>
          <img onClick={handleToHome} src={logo} alt="Logo Navbar" />
        </div>
        <ul>
          <li>
            <button className='navbar__button'>
              Iniciar Sesión
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
