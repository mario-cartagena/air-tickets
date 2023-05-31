import React, { useContext } from 'react'
import '../components/mainSeats/styleMainSeats.scss';
import SelectSeats from '../components/selectSeats/SelectSeats'
import TitleDetails from '../components/flight/infoFlight/titleDetails/TitleDetails'
import ButtonEditFlight from '../components/flight/buttonEdtiFlight/ButtonEditFlight'
import FlightReservation from '../components/flight/reservationDetails/flightReservation/FlightReservation'
import FlightCost from '../components/flight/reservationDetails/flightCost/FlightCost'
import FlightServices from '../components/flight/reservationDetails/aditionalServices/FlightServices'
import ButtonSeats from '../components/flight/reservationDetails/buttonSeats/ButtonSeats'
import FlightTUA from '../components/flight/reservationDetails/flightTUA/FlightTUA'
import FlightTotal from '../components/flight/reservationDetails/flightTotal/FlightTotal'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../components/home/main/search/searchSchedule/appContext/AppContext';

const MainSeats = () => {

  const storedDataToFilter = sessionStorage.getItem('dataToFilter');
  const parsedDataToFilter = JSON.parse(storedDataToFilter);
  const { selectedSeatCount, setSelectedSeatCount, parsedArrivalInfoBaggage } = useContext(AppContext);
  const navigate = useNavigate();
  let totalPassengers = 0;
  if (
    !parsedArrivalInfoBaggage ||
    Object.entries(parsedArrivalInfoBaggage).length === 0 ||
    parsedArrivalInfoBaggage === 0
  ) {
    totalPassengers = parsedDataToFilter.countAdult + parsedDataToFilter.countNiños + parsedDataToFilter.countNiños;
  } else {
    totalPassengers = (parsedDataToFilter.countAdult + parsedDataToFilter.countNiños + parsedDataToFilter.countNiños) * 2;
  }

  // totalPassengers = (parsedDataToFilter.countAdult + parsedDataToFilter.countNiños + parsedDataToFilter.countNiños)
  console.log('total pasajeros', totalPassengers);
  console.log('total seleccionados', selectedSeatCount);
  const MAX_SELECTED_SEATS = totalPassengers; // Número máximo de asientos seleccionados permitidos
  console.log(MAX_SELECTED_SEATS);

  const handleToHome = () => {
    navigate('/');
  }

  const handleToPayment = () => {
    navigate('/payment');
  }

  return (
    <div className='seats'>
      <div className="seats__left">
        <div className='info__header'>
          <TitleDetails name={'salida'} date={parsedDataToFilter.dateDepartureSelected} departure={parsedDataToFilter.selectedDepartureAirport} arrival={parsedDataToFilter.selectedArrivalAirport} />
          <ButtonEditFlight onClick={handleToHome} />
        </div>
        <SelectSeats />
      </div>
      <div className="seats__right">
        <div className='booking'>
          <FlightReservation />
          <FlightCost />
          {/* <FlightServices />
          <FlightTUA /> */}
          {(selectedSeatCount === MAX_SELECTED_SEATS) &&
            <>
              <FlightServices />
              <FlightTUA />
              <FlightTotal />
              <button onClick={handleToPayment} className='btn__seats'>
                <span>Pagar con PayPal</span>
              </button>
            </>
          }
        </div>
      </div>
    </div>

  )
}

export default MainSeats