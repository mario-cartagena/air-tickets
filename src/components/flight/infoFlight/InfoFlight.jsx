import React from 'react'
import './styleInfoFlight.scss'
import TitleDetails from './titleDetails/TitleDetails'
import ItemFlight from './itemFlight/ItemFlight'
import ButtonEditFlight from '../buttonEdtiFlight/ButtonEditFlight'
import { useNavigate } from 'react-router-dom'
const InfoFlight = () => {
  const navigate = useNavigate();
  const handleToHome = () => {
    navigate('/');
  }
  const storedFilteredDates = sessionStorage.getItem('filteredDates');
  const parsedFilteredDates = JSON.parse(storedFilteredDates);
  const storedFilteredDatesRound = sessionStorage.getItem('filteredDatesRound');
  const parsedFilteredDatesRound = JSON.parse(storedFilteredDatesRound);
  const storedArrivalSelected = sessionStorage.getItem('filteredArrivalSelected');
  const parsedArrivalSelected = JSON.parse(storedArrivalSelected);
  const storedDataToFilter = sessionStorage.getItem('dataToFilter');
  const parsedDataToFilter = JSON.parse(storedDataToFilter);
  console.log(typeof (parsedFilteredDatesRound))
  return (
    <>
      <div className='info'>
        <div className='info__header'>
          <TitleDetails name={'salida'} date={parsedDataToFilter.dateDepartureSelected} departure={parsedDataToFilter.selectedDepartureAirport} arrival={parsedDataToFilter.selectedArrivalAirport} />
          <ButtonEditFlight onClick={handleToHome} />
        </div>
        <div className='info__packages'>
          <p className='info__title'>Selección de horarios y equipajes</p>
          {parsedFilteredDates ?
            <ItemFlight data={parsedFilteredDates} name="departureFlight" />
            : ''}
        </div>
      </div>
      {parsedDataToFilter.dateArrivalSelected == undefined ? '' :
        <div className='info'>
          <div className='info__header'>
            <TitleDetails name={'regreso'} date={parsedDataToFilter.dateArrivalSelected} departure={parsedDataToFilter.selectedArrivalAirport} arrival={parsedDataToFilter.selectedDepartureAirport} />
            <ButtonEditFlight />
          </div>
          <div className='info__packages'>
            <p className='info__title'>Selección de horarios y equipajes</p>
            {(!parsedFilteredDatesRound || Object.entries(parsedFilteredDatesRound).length === 0 || parsedFilteredDatesRound === 0) ? (
              <h1>No hay vuelos disponibles</h1>
            ) : (
              <ItemFlight data={parsedFilteredDatesRound} name="arrivalFlight" />
            )}
          </div>

        </div>
      }
    </>
  )
}

export default InfoFlight