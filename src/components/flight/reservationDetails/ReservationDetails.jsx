import React, { useContext } from 'react';
import './styleReservationDetails.scss';
import FlightReservation from './flightReservation/FlightReservation'
import FlightCost from './flightCost/FlightCost';
import FlightServices from './aditionalServices/FlightServices';
import ButtonSeats from './buttonSeats/ButtonSeats';
import { AppContext } from '../../home/main/search/searchSchedule/appContext/AppContext';
import { useNavigate } from 'react-router-dom';

const ReservationDetails = () => {
  const storedDataToFilter = sessionStorage.getItem('dataToFilter');
  const parsedDataToFilter = JSON.parse(storedDataToFilter);
  const storedFilteredDatesRound = sessionStorage.getItem('filteredDatesRound');
  const parsedFilteredDatesRound = JSON.parse(storedFilteredDatesRound);
  const storedFilteredDates = sessionStorage.getItem('filteredDates');
  const parsedFilteredDates = JSON.parse(storedFilteredDates);

  const {arrivalInfoBaggage, departureInfoBaggage} = useContext(AppContext);
  const navigate = useNavigate();

  const handleSelectedSeats = () => {
    navigate('/seats');
  }

  return (
    <div className='booking'>
      <FlightReservation date={parsedDataToFilter.dateDepartureSelected}
      />
      <FlightCost />
      {/* <FlightServices /> */}
      {/* <ButtonSeats nameButton="Seleccionar asientos" /> */}
      {Object.keys(arrivalInfoBaggage).length !== 0  || Object.keys(departureInfoBaggage).length > 0  ?
        <ButtonSeats onClick={handleSelectedSeats} nameButton="Seleccionar asientos" /> : ""
      } 
    </div>
  )
}

export default ReservationDetails