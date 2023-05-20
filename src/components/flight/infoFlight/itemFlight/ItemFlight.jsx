import React from 'react';
import './styleItemFlight.scss';
import FlightSchedules from './flightSchedules/FlightSchedules'
import FlightPackages from './flightPackages/FlightPackages'

const ItemFlight = () => {
  return (
    <div className='item__flight'>
        <FlightSchedules/>
        <FlightPackages/>
    </div>
  )
}

export default ItemFlight