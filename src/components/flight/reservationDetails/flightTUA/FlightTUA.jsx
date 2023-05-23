import React from 'react';
import './styleFlightTUA.scss';

const FlightTUA = () => {
  return (
    <div className='tua'>
        <p className='tua__title'>TUA</p>
        <div className='tua__info'>
            <div className='tua__price'>
                <p>Tarifa de uso de aeropuerto (TUA)</p>
                <span>$1,191 MXN</span>
            </div>
            <div className='tua__total'>
                <p>Total</p>
                <span>$1,191 MXN</span>
            </div>
        </div>
    </div>
  )
}

export default FlightTUA