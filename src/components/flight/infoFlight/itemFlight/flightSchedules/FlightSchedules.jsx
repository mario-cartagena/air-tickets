import React from 'react'
import './styleFlightSchedules.scss';

const FlightSchedules = ({departureTime, duration, arrivalTime, scales}) => {
  return (
    <div className='schedules'>
        <span>{departureTime}</span>
        <div className='schedules__time'>
            <p>{duration}</p>
            <div className='horizontalLine'></div>
           {scales === 0 ?  <p> Sin escalas </p> : <p>{scales} escalas </p> } 
        </div>
        <span>{arrivalTime}</span>
    </div>
  )
}

export default FlightSchedules