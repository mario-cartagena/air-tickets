import React from 'react'
import '../components/mainSeats/styleMainSeats.scss';
import SelectSeats from '../components/selectSeats/SelectSeats'
import TitleDetails from '../components/flight/infoFlight/titleDetails/TitleDetails'
import ButtonEditFlight from '../components/flight/buttonEdtiFlight/ButtonEditFlight'
import FlightReservation from '../components/flight/reservationDetails/flightReservation/FlightReservation'
import FlightCost from '../components/flight/reservationDetails/flightCost/FlightCost'
import FlightServices from '../components/flight/reservationDetails/aditionalServices/FlightServices'
import ButtonSeats from '../components/flight/reservationDetails/buttonSeats/ButtonSeats'
import FlightTUA from '../components/flight/reservationDetails/flightTUA/FlightTUA'
import FlightTotal from '../components/flight/reservationDetails/flightTotal/FlightTotal'

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
          <FlightTUA/>
          <FlightTotal/>
          <ButtonSeats nameButton="Pagar con PayPal"/>
        </div>
      </div>
    </div>
    
  )
}

export default MainSeats