import React from 'react'
import './styleMainSeats.scss'
import SelectSeats from '../selectSeats/SelectSeats'
import TitleDetails from '../flight/infoFlight/titleDetails/TitleDetails'
import ButtonEditFlight from '../flight/buttonEdtiFlight/ButtonEditFlight'
import FlightReservation from '../flight/reservationDetails/flightReservation/FlightReservation'
import FlightCost from '../flight/reservationDetails/flightCost/FlightCost'
import FlightServices from '../flight/reservationDetails/aditionalServices/FlightServices'
import ButtonSeats from '../flight/reservationDetails/buttonSeats/ButtonSeats'

const MainSeats = () => {
  return (
    <div className='seats'>
      <div className="seats__left">
        <div className='info__header'>
          <TitleDetails/>
          <ButtonEditFlight/>
        </div>
        <SelectSeats/>
      </div>
      <div className="seats__right">
        <div className='booking'>
          <FlightReservation/>
          <FlightCost/>
          <FlightServices/>
          <ButtonSeats nameButton="Pagar con PayPal"/>
        </div>
      </div>
    </div>
    
  )
}

export default MainSeats