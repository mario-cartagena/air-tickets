import React, { useContext, useState } from 'react';
import './stylesSelectSeats.scss';
import RowSeats from './rowSeats/RowSeats';
import RowLettersSeats from './rowLetters/RowLettersSeats';
import { AppContext } from '../home/main/search/searchSchedule/appContext/AppContext';
import RowSeatsDeparture from './rowSeats/RowSeatsDeparture';

const SelectSeats = () => {
  const { selectedSeatCount, setSelectedSeatCount, parsedArrivalInfoBaggage } = useContext(AppContext);
  console.log(selectedSeatCount, 'selected');
  const storedDataToFilter = sessionStorage.getItem('dataToFilter');
  const parsedDataToFilter = JSON.parse(storedDataToFilter);

  let totalPassengers 

  // if (
  //   !parsedArrivalInfoBaggage ||
  //   Object.entries(parsedArrivalInfoBaggage).length === 0 ||
  //   parsedArrivalInfoBaggage === 0
  // ) {
  //   totalPassengers = parsedDataToFilter.countAdult + parsedDataToFilter.countNiños + parsedDataToFilter.countNiños;
  // } else {
  //   totalPassengers = (parsedDataToFilter.countAdult + parsedDataToFilter.countNiños + parsedDataToFilter.countNiños) * 2;
  // }


 

  const MAX_SELECTED_SEATS = selectedSeatCount; // Número máximo de asientos seleccionados permitidos

  
  if (selectedSeatCount === MAX_SELECTED_SEATS) {
   // alert('Has seleccionado todos los asientos permitidos');
  }

  

  return (
    <>
      <div className='container__ppl'>
        <h3>Selecciona tus asientos</h3>
        <RowLettersSeats />
        <p>Salida rápida</p>
        <RowSeatsDeparture number={1} setSelectedSeatCount={setSelectedSeatCount} selectedSeatCount={selectedSeatCount} />
        <RowSeatsDeparture number={2} setSelectedSeatCount={setSelectedSeatCount} selectedSeatCount={selectedSeatCount} />
        <RowSeatsDeparture number={3} setSelectedSeatCount={setSelectedSeatCount} selectedSeatCount={selectedSeatCount} />
        <RowSeatsDeparture number={4} setSelectedSeatCount={setSelectedSeatCount} selectedSeatCount={selectedSeatCount} />
        <RowSeatsDeparture number={5} setSelectedSeatCount={setSelectedSeatCount} selectedSeatCount={selectedSeatCount} />
        <p>Salida Estándar</p>
        <RowSeatsDeparture number={6} setSelectedSeatCount={setSelectedSeatCount} selectedSeatCount={selectedSeatCount} />
        <RowSeatsDeparture number={7} setSelectedSeatCount={setSelectedSeatCount} selectedSeatCount={selectedSeatCount} />
        <RowSeatsDeparture number={8} setSelectedSeatCount={setSelectedSeatCount} selectedSeatCount={selectedSeatCount} />
        <RowSeatsDeparture number={9} setSelectedSeatCount={setSelectedSeatCount} selectedSeatCount={selectedSeatCount} />
        <RowSeatsDeparture number={10} setSelectedSeatCount={setSelectedSeatCount} selectedSeatCount={selectedSeatCount} />
      </div>

       {parsedArrivalInfoBaggage &&

         <div className='container__ppl'>
        <h3>Selecciona tus asientos</h3>
        <RowLettersSeats />
        <p>Salida rápida</p>
        <RowSeats number={1} setSelectedSeatCount={setSelectedSeatCount} selectedSeatCount={selectedSeatCount} />
        <RowSeats number={2} setSelectedSeatCount={setSelectedSeatCount} selectedSeatCount={selectedSeatCount} />
        <RowSeats number={3} setSelectedSeatCount={setSelectedSeatCount} selectedSeatCount={selectedSeatCount} />
        <RowSeats number={4} setSelectedSeatCount={setSelectedSeatCount} selectedSeatCount={selectedSeatCount} />
        <RowSeats number={5} setSelectedSeatCount={setSelectedSeatCount} selectedSeatCount={selectedSeatCount} />
        <p>Salida Estándar</p>
        <RowSeats number={6} setSelectedSeatCount={setSelectedSeatCount} selectedSeatCount={selectedSeatCount} />
        <RowSeats number={7} setSelectedSeatCount={setSelectedSeatCount} selectedSeatCount={selectedSeatCount} />
        <RowSeats number={8} setSelectedSeatCount={setSelectedSeatCount} selectedSeatCount={selectedSeatCount} />
        <RowSeats number={9} setSelectedSeatCount={setSelectedSeatCount} selectedSeatCount={selectedSeatCount} />
        <RowSeats number={10} setSelectedSeatCount={setSelectedSeatCount} selectedSeatCount={selectedSeatCount} />
         </div>
      }
    </>
  );
     
  

};

export default SelectSeats;