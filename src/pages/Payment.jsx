import { ExpandMoreOutlined } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';
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

const Payment = () => {
    return (
        <div className="payment">
            <div className='payment__information'>
                <div className="payment__passengers">
                    <Typography variant="span">Pasajeros</Typography>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
                            <Typography>Adulto 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormPassenger/>
                        </AccordionDetails>
                    </Accordion>           
                </div>
                <div className="payment__methods">
                    <Typography variant="span">Elige cómo quieres pagar</Typography>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
                            <Typography>Tarjeta de crédito o Debito con CVV</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormPayment/>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div> 
            <div className='booking'>
                <FlightReservation/>
                <FlightCost/>
                <FlightServices/>
                <FlightTUA/>
                <FlightTotal/>
                <ButtonSeats nameButton="Pagar mi viaje"/>
            </div>
        </div>
  )
}

export default Payment