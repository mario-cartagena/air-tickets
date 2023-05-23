import React from 'react';
import './styleFlightReservation.scss';

const FlightReservation = () => {
  return (
    <div className='reservation'>
        <p className='reservation__title'>Tu reservación</p>
        <div className='reservation__info'>
            <div className='reservation__passengers'>
                <p>Pasajeros</p>
                <p>1 Adulto</p>
            </div>
            <div className='reservation__infodeparture'>
                <p>Vuelo de salida</p>
                <div className='reservation__departure'>
                    <div className='reservation__origin'>
                        <span>MEX</span>
                        <span>05:45 PM</span>
                    </div>
                    <div className='reservation__separator'></div>
                    <div className='reservation__destiny'>
                        <span>CUL</span>
                        <span>08:47 PM</span>
                    </div>
                </div>
                <div className="reservation__date">
                    <p>Martes, 30 noviembre, 2021</p>
                </div>
            </div>
            <div className='reservation__infoarrival'>
                <p>Vuelo de regreso</p>
                <div className='reservation__departure'>
                    <div className='reservation__origin'>
                        <span>CUL</span>
                        <span>07:28 PM</span>
                    </div>
                    <div className='reservation__separator'></div>
                    <div className='reservation__destiny'>
                        <span>MEX</span>
                        <span>10:00 AM</span>
                    </div>
                </div>
                <div className="reservation__date">
                    <p>Martes, 08 diciembre, 2021</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FlightReservation