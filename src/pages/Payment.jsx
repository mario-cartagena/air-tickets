import { ExpandMoreOutlined } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React, { useContext } from 'react';
import FlightReservation from '../components/flight/reservationDetails/flightReservation/FlightReservation';
import FlightCost from '../components/flight/reservationDetails/flightCost/FlightCost';
import FlightServices from '../components/flight/reservationDetails/aditionalServices/FlightServices';
import FlightTUA from '../components/flight/reservationDetails/flightTUA/FlightTUA';
import FlightTotal from '../components/flight/reservationDetails/flightTotal/FlightTotal';
import ButtonSeats from '../components/flight/reservationDetails/buttonSeats/ButtonSeats';
import '../components/payment/stylePayment.scss';
import '../components/payment/styleForm.scss';
import FormPassenger from '../components/payment/formPassenger/FormPassenger';
import FormPayment from '../components/payment/formPayment/FormPayment';
import { useNavigate } from 'react-router-dom';
import { postBooking } from '../services/postBooking';
import { AppContext } from '../components/home/main/search/searchSchedule/appContext/AppContext';
import CircularColor from '../components/common/CircularColor';

const Payment = () => {

    const storedpassengerInfoBooking = sessionStorage.getItem('passengerInfoBooking');
    const parsedpassengerInfoBooking = JSON.parse(storedpassengerInfoBooking);
  const { responseBookingConfirmed, setResponseBookingConfirmed } = useContext(AppContext);

    const navigate = useNavigate();


    // const keys = Object.keys(sessionStorage);

    // const allInfoBookingFromStorage = keys.map((key) => {
    // const item = JSON.parse(sessionStorage.getItem(key));
    // return item;
    // });

    // console.log(allInfoBookingFromStorage);

    const keys = Object.keys(sessionStorage);
    const allInfoBookingFromStorage = {};

    keys.forEach((key) => {
        const item = JSON.parse(sessionStorage.getItem(key));
        if (item && Object.keys(item).length > 0) {
            allInfoBookingFromStorage[key] = item;
        }
    });


    console.log(allInfoBookingFromStorage);
    const seatsSelectedDeparture = Object.keys(allInfoBookingFromStorage).map(key => ({ key, value: allInfoBookingFromStorage[key] })).filter(item => item.key.includes('seatRowDeparture'));
    console.log(seatsSelectedDeparture);
    const infoSeatsDeparture = seatsSelectedDeparture.flatMap(i => i.value);
    console.log(infoSeatsDeparture);

    const infoBooking = allInfoBookingFromStorage.infoBooking
    console.log(infoBooking.tarifaBase);

    const passengerInfoBooking = allInfoBookingFromStorage.passengerInfoBooking
    console.log(passengerInfoBooking);


    const baggageArrivalInfo = allInfoBookingFromStorage.arrivalInfoBaggage
    console.log(baggageArrivalInfo);

    const baggageDepartureInfo = allInfoBookingFromStorage.departureInfoBaggage
    console.log(baggageDepartureInfo);

    let totalPassengers = 0;
    totalPassengers = allInfoBookingFromStorage.dataToFilter.countAdult + allInfoBookingFromStorage.dataToFilter.countNiños + allInfoBookingFromStorage.dataToFilter.countNiños
    console.log(totalPassengers);

    const bookingConfirmed = [{
        infoBooking,
        passengerInfoBooking,
        infoSeatsDeparture,
        baggageDepartureInfo,
        baggageArrivalInfo,
        parsedpassengerInfoBooking
    }]
    
    console.log(bookingConfirmed);


    const handleToFlightDetails = () => {

        postBooking(bookingConfirmed)
        .then((response) => {
          console.log(response);
          sessionStorage.setItem('responseBookingConfirmed', JSON.stringify(response));
          const storedresponseBookingConfirmed = sessionStorage.getItem('responseBookingConfirmed');
          const bookingConfirmed = JSON.parse(storedresponseBookingConfirmed);
          // Ejecutar una función después de 5 segundos usando setTimeout
          const timeout = setTimeout(() => {
            // Realizar alguna acción después de 5 segundos
      
            // Cambiar el estado o hacer cualquier otra operación necesaria
            // Ejemplo: setColor("#FF0000");
      
            // Navegar a la página '/flightdetails'
            navigate('/flightdetails');
          }, 5000);
      
          // Renderizar el componente CircularColor
          return <CircularColor />;
        })
        .catch((error) => {
          console.log(error);
        });
      

    }



    return (
        <div className="payment">
            <div className='payment__information'>
                <div className="payment__passengers">
                    <Typography variant="span">Pasajeros</Typography>
                    {Array.from({ length: totalPassengers }, (_, index) => (
                        <Accordion key={index}>
                            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                                <Typography>{`Pasajero ${index + 1}`}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <FormPassenger key={index + 1} />
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
                <div className="payment__methods">
                    <Typography variant="span">Elige cómo quieres pagar</Typography>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                            <Typography>Tarjeta de crédito o Debito con CVV</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormPayment />
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
            <div className='booking'>
                <FlightReservation />
                <FlightCost />
                <FlightServices />
                <FlightTUA />
                <FlightTotal />
                <button onClick={handleToFlightDetails} className='btn__seats'>
                    <span>Pagar mi viaje</span>
                </button>
            </div>
        </div>
    )
}

export default Payment