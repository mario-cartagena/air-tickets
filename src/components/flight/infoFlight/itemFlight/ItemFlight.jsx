import React from 'react';
import './styleItemFlight.scss';
import FlightSchedules from './flightSchedules/FlightSchedules'
import FlightPackages from './flightPackages/FlightPackages'

const ItemFlight = ({ data, name }) => {
  console.log(data)
  console.log(name)

  return (
    <div className='item__flight'>
      {data.map((i) => (
        <>
          <FlightSchedules key={i.id}
            departureTime={i.departure_time}
            duration={i.duration}
            scales={i.scales}
            arrivalTime={i.arrival_time}
          />
          <FlightPackages id={i.id} name={name} data={data} />
        </>
      ))}
    </div>
  )
}

export default ItemFlight