import React from 'react'
import './styleInfoFlight.scss'
import TitleDetails from './titleDetails/TitleDetails'
import ItemFlight from './itemFlight/ItemFlight'
import ButtonEditFlight from '../buttonEdtiFlight/ButtonEditFlight'

const InfoFlight = () => {

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
          <ButtonEditFlight />
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
          {parsedFilteredDatesRound == {} || null || undefined ? (
            <ItemFlight data={parsedFilteredDatesRound} name="arrivalFlight" />
          ) : (
            <h1>No hay vuelos Disponibles</h1>
          )}
        </div>
     

      </div>
       }
    </>
  )
}

export default InfoFlight