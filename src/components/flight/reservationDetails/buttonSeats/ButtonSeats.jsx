import React from 'react';
import './styleButtonSeats.scss';
import { useNavigate } from 'react-router-dom';

const ButtonSeats = ({nameButton}) => {
  const navigate = useNavigate();

  const handleSelectedSeats = () => {
    navigate('/seats');
  }
  return (
    <>
        <button onClick={handleSelectedSeats} className='btn__seats'>
            <span>{nameButton}</span>
        </button>
    </>
  )
}

export default ButtonSeats