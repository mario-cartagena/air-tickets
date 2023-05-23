import React from 'react'
import '../components/flight/styleFlight.scss';
import ReservationDetails from '../components/flight/reservationDetails/ReservationDetails';
import InfoFlight from '../components/flight/infoFlight/InfoFlight';

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