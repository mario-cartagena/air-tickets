import React from 'react';
import './styleTitleDetails.scss'
import { formatDate } from '../../../../utils/helpers';

const TitleDetails = () => {

  const storedFilteredDates = sessionStorage.getItem('filteredDates');
  const parsedFilteredDates = JSON.parse(storedFilteredDates);

  return (
    <div className='flight__details'>
      <h1>Vuelo de salida</h1>
      <div className='details'>
        {parsedFilteredDates &&
          <h4>{formatDate(parsedFilteredDates[0].departure_date)}</h4>
        }
        <span>{parsedFilteredDates[0].departure_airport.city} a {parsedFilteredDates[0].arrival_airport.city}</span>
      </div>
    </div>
  )
}

export default TitleDetails