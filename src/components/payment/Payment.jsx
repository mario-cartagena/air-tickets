import { ExpandMoreOutlined } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';
import FlightReservation from '../flight/reservationDetails/flightReservation/FlightReservation';
import FlightCost from '../flight/reservationDetails/flightCost/FlightCost';
import FlightServices from '../flight/reservationDetails/aditionalServices/FlightServices';
import FlightTUA from '../flight/reservationDetails/flightTUA/FlightTUA';
import FlightTotal from '../flight/reservationDetails/flightTotal/FlightTotal';
import ButtonSeats from '../flight/reservationDetails/buttonSeats/ButtonSeats';
import './stylePayment.scss';
import './styleForm.scss';
import FormPassenger from './formPassenger/FormPassenger';
import FormPayment from './formPayment/FormPayment';

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