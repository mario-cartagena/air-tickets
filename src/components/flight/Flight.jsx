import React from 'react'
import './styleFlight.scss';
import ReservationDetails from './reservationDetails/ReservationDetails';
import InfoFlight from './infoFlight/InfoFlight';

const Flight = () => {
  return (
    <div className='flight'>
      <div className='flight__information'>
        <InfoFlight/>
        <InfoFlight/>
      </div>
      <div className='flight__reservation'>
          <ReservationDetails/>
      </div>
    </div>
  )
}

export default Flight