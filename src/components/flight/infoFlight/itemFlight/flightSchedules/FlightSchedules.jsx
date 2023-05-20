import React from 'react'
import './styleFlightSchedules.scss';

const FlightSchedules = () => {
  return (
    <div className='schedules'>
        <span>05:50 PM</span>
        <div className='schedules__time'>
            <p>1h 57min</p>
            <div className='horizontalLine'></div>
            <p>Sin escalas</p>
        </div>
        <span>06:47 PM</span>
    </div>
  )
}

export default FlightSchedules