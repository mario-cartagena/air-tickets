import React from 'react';
import './styleFlightTUA.scss';

const FlightTUA = () => {

  const tua = 10000
  return (
    <div className='tua'>
        <p className='tua__title'>TUA</p>
        <div className='tua__info'>
            <div className='tua__price'>
                <p>Tarifa de uso de aeropuerto (TUA)</p>
                <span>${tua} COP</span>
            </div>
            <div className='tua__total'>
                <p>Total</p>
                <span>${tua} COP</span>
            </div>
        </div>
    </div>
  )
}

export default FlightTUA