import React from 'react';
import './styleButtonEditFlight.scss'
import { useNavigate } from 'react-router-dom';

const ButtonEditFlight = () => {
  const navigate = useNavigate();

  const handleToHome = () => {
    navigate('/');
  }
  return (
    <>
        <button onClick={handleToHome} className='btn__edit'>
            <span>Cambiar vuelo</span>
        </button>
    </>
  )
}

export default ButtonEditFlight