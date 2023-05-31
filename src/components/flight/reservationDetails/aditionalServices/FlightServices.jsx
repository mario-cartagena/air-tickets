import React from 'react';
import './styleFlightServices.scss'

const FlightServices = () => {

    const selectSeat = 11000
    const ivaSeat = 0.19
  return (
    <div className='services'>
        <p className='services__title'>Servicios opcionales</p>
        <div className='services__info'>
            <div className='services__seat'>
                <p>Selecciona tu asiento</p>
                <span>${selectSeat} COP</span>
            </div>
            <div className='services__iva'>
                <p>IVA servicios</p>
                <span>${ivaSeat * selectSeat} COP</span>
            </div>
            <div className='services__total'>
                <p>Total</p>
                <span>${selectSeat * ivaSeat + selectSeat} COP</span>
            </div>
        </div>
    </div>
  )
}

export default FlightServices