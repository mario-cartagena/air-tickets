import React, { useContext } from 'react';
import './styleFlightReservation.scss';
import { formatDate } from '../../../../utils/helpers';
import { AppContext } from '../../../home/main/search/searchSchedule/appContext/AppContext';

const FlightReservation = ({date}) => {
    
    console.log(date)
    const { departureInfoBaggage, setDepartureInfoBaggage, arrivalInfoBaggage, setArrivalInfoBaggage } = useContext(AppContext);
    const storedDataToFilter = sessionStorage.getItem('dataToFilter');
    const parsedDataToFilter = JSON.parse(storedDataToFilter);
    return (
    <div className='reservation'>
        <p className='reservation__title'>Tu reservación</p>
        <div className='reservation__info'>
            <div className='reservation__passengers'>
                <p>Pasajeros</p>
                { (parsedDataToFilter.countAdult > 0 && parsedDataToFilter.countNiños > 0)? 
                   (<p>{parsedDataToFilter.countAdult} Adultos, {parsedDataToFilter.countNiños} Niños</p> ):
                   (<p>{parsedDataToFilter.countAdult} Adultos</p>)
                }
            </div>
            {/* validar si existe departure */}
            {Object.keys(departureInfoBaggage).length > 0 ?                     
                <div className='reservation__infodeparture'>
                    <p>Vuelo de salida</p>
                    <div className='reservation__departure'>
                        <div className='reservation__origin'>
                            <span>{departureInfoBaggage.data[0].departure_airport.code_iata}</span>
                            <span>{departureInfoBaggage.data[0].departure_time}</span>
                        </div>
                        <div className='reservation__separator'></div>
                        <div className='reservation__destiny'>
                            <span>{departureInfoBaggage.data[0].arrival_airport.code_iata}</span>
                            <span>{departureInfoBaggage.data[0].arrival_time}</span>
                        </div>
                    </div>
                    <div className="reservation__date">
                    {date &&
                        <p>{formatDate(parsedDataToFilter.dateDepartureSelected)}</p>
                    }
                    </div>
                </div>
                : ""
            }
            {/* validar si existe arrival */}
            {Object.keys(arrivalInfoBaggage).length > 0 ? 
                <div className='reservation__infoarrival'>
                    <p>Vuelo de regreso</p>
                    <div className='reservation__departure'>
                        <div className='reservation__origin'>
                            <span>{arrivalInfoBaggage.data[0].departure_airport.code_iata}</span>
                            <span>{arrivalInfoBaggage.data[0].departure_time}</span>
                        </div>
                        <div className='reservation__separator'></div>
                        <div className='reservation__destiny'>
                            <span>{arrivalInfoBaggage.data[0].arrival_airport.code_iata}</span>
                            <span>{arrivalInfoBaggage.data[0].arrival_time}</span>
                        </div>
                    </div>
                    <div className="reservation__date">
                    {date &&
                        <p>{formatDate(parsedDataToFilter.dateArrivalSelected)}</p>
                    }
                    </div>
                </div>
                : ""
            }
        </div>
    </div>
  )
}

export default FlightReservation