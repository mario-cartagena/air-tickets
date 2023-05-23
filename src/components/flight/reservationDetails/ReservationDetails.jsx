import React from 'react';
import './styleReservationDetails.scss';
import FlightReservation from './flightReservation/FlightReservation'
import FlightCost from './flightCost/FlightCost';
import FlightServices from './aditionalServices/FlightServices';
import ButtonSeats from './buttonSeats/ButtonSeats';

const ReservationDetails = () => {
  return (
    <div className='booking'>
      <FlightReservation/>
      <FlightCost/>
      <FlightServices/>
      <ButtonSeats nameButton="Seleccionar asientos"/>
    </div>
  )
}

export default ReservationDetails