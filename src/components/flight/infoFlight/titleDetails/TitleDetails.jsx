import React from 'react';
import './styleTitleDetails.scss'
import { formatDate } from '../../../../utils/helpers';

const TitleDetails = ({name, date, departure, arrival}) => {

  return (
    <div className='flight__details'>
      <h1>Vuelo de {name}</h1>
      <div className='details'>
        {date &&
          <h4>{formatDate(date)}</h4>
        }
        <span>{departure} a {arrival}</span>
      </div>
    </div>
  )
}

export default TitleDetails