import React, { useState } from 'react';
import './styleFlighPackages.scss';
import BaggageIcon from '../../../../../assets/img/icons/briefcase.svg';

const FlightPackages = ({ id, name, data }) => {
  const [oneObject,] = useState(30000);
  const [handBagagge] = useState(50000);
  const [kgBaggage] = useState(90000);
  const [baggageSelected, setBaggageSelected] = useState('');
  const [flightConfirmed, setFlightConfirmed] = useState({});

  const handleGetBaggage = (baggage, id, name, data) => {
    setBaggageSelected(baggage);
    const flightConfirmed = {
      flightId: id,
      baggagePrice: baggage,
      name: name,
      data: data
    };
    setFlightConfirmed(flightConfirmed);
  };
  // console.log(flightConfirmed);
  if (flightConfirmed.name === 'departureFlight') {
    console.log('soy departureFlight')
    const departureInfo = flightConfirmed
    console.log(departureInfo)
  } else {
    console.log('soy arrivalFlight')
    const arrivalInfo = flightConfirmed
    console.log(arrivalInfo)
  }

  return (
    <div className='baggage'>
      <div className='baggage__personal' onClick={() => handleGetBaggage(oneObject, id, name, data)}>
        <figure>
          <img src={BaggageIcon} alt="Icon Package" />
        </figure>
        <span>1 objeto personal</span>
        <span className='baggage__price'>${oneObject} COP</span>
      </div>
      <div className='baggage__hand' onClick={() => handleGetBaggage(handBagagge, id, name, data)}>
        <figure>
          <img src={BaggageIcon} alt="Icon Package" />
        </figure>
        <span>Equipaje de mano</span>
        <span className='baggage__price'>${handBagagge} COP</span>
      </div>
      <div className='baggage__25k' onClick={() => handleGetBaggage(kgBaggage, id, name, data)}>
        <figure>
          <img src={BaggageIcon} alt="Icon Package" />
        </figure>
        <span>Equipaje 25kg</span>
        <span className='baggage__price'>${kgBaggage} COP</span>
      </div>
    </div>
  );
};

export default FlightPackages;
