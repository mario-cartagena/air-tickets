import React from 'react';
import './styleFlightServices.scss'

const FlightServices = () => {
  return (
    <div className='services'>
        <p className='services__title'>Servicios opcionales</p>
        <div className='services__info'>
            <div className='services__seat'>
                <p>Selecciona tu asiento</p>
                <span>$284 MXN</span>
            </div>
            <div className='services__iva'>
                <p>IVA servicios</p>
                <span>$45 MXN</span>
            </div>
            <div className='services__total'>
                <p>Total</p>
                <span>$548 MXN</span>
            </div>
        </div>
    </div>
  )
}

export default FlightServices