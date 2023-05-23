import React from 'react'
import './styleFlight.scss';
import ReservationDetails from './reservationDetails/ReservationDetails';
import InfoFlight from './infoFlight/InfoFlight';

const Flight = () => {
  return (
    <div className='flights'>
      <div className='flights__information'>
        <InfoFlight/>
        <InfoFlight/>
      </div>
      <div className='flights__reservation'>
          <ReservationDetails/>
      </div>
    </div>
  )
}

export default Flight