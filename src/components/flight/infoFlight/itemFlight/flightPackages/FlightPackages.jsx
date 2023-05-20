import React from 'react'
import './styleFlighPackages.scss'
import BaggageIcon from '../../../../../assets/img/icons/briefcase.svg';

const FlightPackages = () => {
  return (
    <div className='baggage'>
      <div className='baggage__personal'>
        <figure>
          <img src={BaggageIcon} alt="Icon Package" />
        </figure>
        <span>1 objeto personal</span>
        <span className='baggage__price'>$546 MXN</span>
      </div>
      <div className='baggage__hand'>
        <figure>
          <img src={BaggageIcon} alt="Icon Package" />
        </figure>
        <span>Equipaje de mano</span>
        <span className='baggage__price'>$1,084 MXN</span>
      </div>
      <div className='baggage__25k'>
        <figure>
          <img src={BaggageIcon} alt="Icon Package" />
        </figure>
        <span>Equipaje 25kg</span>
        <span className='baggage__price'>$1,945 MXN</span>
      </div>
    </div>
  )
}

export default FlightPackages