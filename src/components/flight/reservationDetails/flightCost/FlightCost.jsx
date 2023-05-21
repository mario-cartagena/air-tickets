import React from 'react';
import './styleFlightCost.scss';

const FlightCost = () => {
  return (
    <div className='cost'>
        <p className='cost__title'>Costos de vuelo</p>
        <div className='cost__info'>
            <div className='cost__fee'>
                <p>Tarifa base</p>
                <span>$1,505 MXN</span>
            </div>
            <div className='cost__discount'>
                <p>Descuento promocional</p>
                <span>-$1,034 MXN</span>
            </div>
            <div className='cost__feediscount'>
                <p>Tarifa base con descuento</p>
                <span>$471 MXN</span>
            </div>
            <div className='cost__iva'>
                <p>IVA Tarifa</p>
                <span>$75 MXN</span>
            </div>
            <div className='cost__total'>
                <p>Total</p>
                <span>$548 MXN</span>
            </div>
        </div>
    </div>
  )
}

export default FlightCost