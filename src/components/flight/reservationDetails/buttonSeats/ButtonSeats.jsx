import React from 'react';
import './styleButtonSeats.scss';

const ButtonSeats = ({nameButton}, ) => {
  return (
    <>
        <button className='btn__seats'>
            <span>{nameButton}</span>
        </button>
    </>
  )
}

export default ButtonSeats