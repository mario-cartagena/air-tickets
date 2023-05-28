import React, { useContext, useState } from 'react'
import './styleFlighPackages.scss'
import BaggageIcon from '../../../../../assets/img/icons/briefcase.svg';
import { AppContext } from '../../../../home/main/search/searchSchedule/appContext/AppContext';

const FlightPackages = ({ id }) => {

  const [oneObject, setOneObject] = useState(30000)
  const [handBagagge, sethandBagagge] = useState(50000)
  const [kgBaggage, setkgBaggage] = useState(90000)
  const [baggageSelected, setBaggageSelected] = useState('')
  const [departureFlightConfirmed, setDepartureFlightConfirmed] = useState({})


  const handleGetBaggage = (baggage, id) => {
    setBaggageSelected(baggage);
    setDepartureFlightConfirmed({
      ...departureFlightConfirmed,
      flightId: id,
      baggaggePrice: baggageSelected
  })
    console.log(departureFlightConfirmed)
  };
  console.log(baggageSelected)
  console.log(id)


  return (
    <div className='baggage'>
      <div className='baggage__personal' onClick={() => handleGetBaggage(oneObject, id)}>
        <figure>
          <img src={BaggageIcon} alt="Icon Package" />
        </figure>
        <span>1 objeto personal</span>
        <span className='baggage__price'>${oneObject} COP</span>
      </div>
      <div className='baggage__hand' onClick={() => handleGetBaggage(handBagagge, id)}>
        <figure>
          <img src={BaggageIcon} alt="Icon Package" />
        </figure>
        <span>Equipaje de mano</span>
        <span className='baggage__price'>${handBagagge} COP</span>
      </div>
      <div className='baggage__25k' onClick={() => handleGetBaggage(kgBaggage, id)}>
        <figure>
          <img src={BaggageIcon} alt="Icon Package" />
        </figure>
        <span>Equipaje 25kg</span>
        <span className='baggage__price'>${kgBaggage} COP</span>
      </div>
    </div>
  )
}

export default FlightPackages