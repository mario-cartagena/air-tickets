import React, { useContext, useEffect, useState } from 'react'
import UseAutocomplete from './searchSelectAirport/UseAutocomplete'
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styleSearch.scss'
import CouponDiscount from './couponDiscount/CouponDiscount';
import imgPlane from "../../../../assets/img/bg-flight.jpeg"
import BasicDateRangePicker from './searchSchedule/basicDateRangePicker/BasicDateRangePicker';
import DatePickerViews from './searchSchedule/datePickerViews/DatePickerViews';
import FormPropsDatePickers from './searchSchedule/formProps DatePicker/FormPropsFatePicker';
// import CustomDatePicker from './searchSchedule/customDatePicker/CustomDatePicker';
import DateRangeValidationShouldDisableDate from './searchSchedule/DateRangeValidationShouldDisableDate';
import { AppContext } from './searchSchedule/appContext/AppContext';
import dayjs from 'dayjs';
import QuantityPassengers from './searchQuantityPassenger/quantityPassengers/QuantityPassengers';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { ExpandMoreOutlined } from '@mui/icons-material';
import FilterFligths from '../../../../services/filterFligths';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Search = () => {

  // ********************FUNCIÓN PARA MANEJAR LOS ESTADOS DEL CONTADOR DE PASAJEROS************************

  const [countAdult, setCountAdult] = useState(1);
  const [countNiños, setCountNiños] = useState(0);
  const [countBebes, setCountBebes] = useState(0);

  // ********************FUNCIÓN PARA MANEJAR EL CUPON DE DCTO***********************

  const [couponCode, setCouponCode] = useState('');


  // ********************FUNCIÓN PARA RECIBIR LAS VARIABLES DE FECHA DESDE DATERANGE************************

  const { selectedDate, filteredData, setFilteredData, selectedDateSimple, setSelectedDateSimple, departureInfo, arrivalInfo, departureInfoBaggage } = useContext(AppContext);
  const formatDate = (date) => {
    if (!date) return ''; // Manejo de fecha nula

    return dayjs(date.$d).format('YYYY-MM-DD')
  };
  console.log(departureInfoBaggage)
  console.log(departureInfo, arrivalInfo);

  const dateDepartureSelected = formatDate(selectedDate[0]);
  console.log('selectedDate departure en Search:', dateDepartureSelected);

  const dateArrivalSelected = formatDate(selectedDate[1]);
  console.log('selectedDate Arrival en Search:', dateArrivalSelected);

  const formatDateLetters = (date) => {
    if (!date) return ''; // Manejo de fecha nula

    return dayjs(date.$d).format('ddd DD MMM, YYYY'); // Formato: Mar 07 may, 2023
  };
  console.log('selectedDate en Search:', formatDateLetters(selectedDate[0]));


  // ********************FUNCIÓN PARA RECIBIR LAS VARIABLES DE FECHA DESDE DATEPICKERVIEWS************************

  console.log(formatDate(selectedDateSimple))
  const dateDepartureSelectedSimple = formatDate(selectedDateSimple)

  // ********************FUNCIÓN PARA MANEJAR EL ESTADO DE BOTON VIAJE REDONDO************************

  const [activeButton, setActiveButton] = useState('viajeRedondo');

  const handleClick = (option) => {
    if (activeButton !== option) {
      console.log('active')
      setActiveButton(option);
    }
  };

  React.useEffect(() => {
    // console.log('Selected Dates:');
    if (selectedDate) {
      for (const date of selectedDate) {
        if (date && date.$d) {
          console.log(`${date.$y}-${date.$M + 1}-${date.$D}`);
          console.log(date.$d);
          console.log(formatDate(date));
        }
      }
    }
  }, [selectedDate]);

  // ********************FUNCIÓN PARA MANEJAR LOS ESTADOS DEL BUSCADOR DE AEROPUERTO************************

  const [selectedAirport, setSelectedAirport] = useState('');
  console.log(selectedAirport, setSelectedAirport)

  const [isDepartureModalOpen, setDepartureModalOpen] = useState(false);
  const [isArrivalModalOpen, setArrivalModalOpen] = useState(false);
  const [selectedDepartureAirport, setSelectedDepartureAirport] = useState('');
  const [selectedArrivalAirport, setSelectedArrivalAirport] = useState('');

  const openDepartureModal = () => {
    setDepartureModalOpen(true);
  };

  const closeDepartureModal = () => {
    setDepartureModalOpen(false);
  };

  const openArrivalModal = () => {
    setArrivalModalOpen(true);
  };

  const closeArrivalModal = () => {
    setArrivalModalOpen(false);
  };

  // ********************FUNCIÓN PARA CERRAR LOS MODALES DEL BUSCADOR DE AEROPUERTO************************

  useEffect(() => {
    if (selectedArrivalAirport != null) {
      closeArrivalModal();
      console.log(selectedArrivalAirport)
    }
  }, [selectedArrivalAirport]);

  useEffect(() => {
    if (selectedDepartureAirport != null) {
      closeDepartureModal();
      console.log(selectedDepartureAirport)
    }
  }, [selectedDepartureAirport]);

  // ********************FUNCIÓN PARA VALIDAR Y FILTRAR EL OBJETO DEL FORM************************
  const [dataToFilter, setDataToFilter] = useState('');
  const [dataCitiesFinded, setDataCitiesFinded] = useState([]);
  const [dataDatesFinded, setDataDatesFinded] = useState([]);
  const [dataCitiesFindedRound, setDataCitiesFindedRound] = useState([]);
  const [dataDatesFindedRound, setDataDatesFindedRound] = useState([]);
  const navigate = useNavigate();



  // ***************************FUNCION PARA VALIDAR DATA VUELO REDONDO************************

  useEffect(() => {

    sessionStorage.setItem('dataToFilter', JSON.stringify(dataToFilter));

  }, [dataToFilter])

  useEffect(() => {
    sessionStorage.setItem('filteredDates', JSON.stringify(dataDatesFinded));
  }, [dataDatesFinded])

  useEffect(() => {
    sessionStorage.setItem('filteredDatesRound', JSON.stringify(dataDatesFindedRound));

  }, [dataDatesFindedRound])




  const validateSearchRedondo = () => {
    if (
      selectedDepartureAirport === '' ||
      selectedArrivalAirport === '' ||
      dateDepartureSelected === '' ||
      dateArrivalSelected === '' ||
      countAdult === '' ||
      countNiños === '' ||
      countBebes === ''
    ) {
      alert('Por favor seleccionar todos los campos');
    } else if (selectedDepartureAirport === selectedArrivalAirport) {
      alert('La ciudad de destino no puede ser igual a la ciudad de retorno');
    } else {
      setDataToFilter({
        selectedDepartureAirport,
        selectedArrivalAirport,
        dateDepartureSelected,
        dateArrivalSelected,
        countAdult,
        countNiños,
        countBebes,
        couponCode,
      });
    }
  }


  // **********************************************************

  const validateSearchSencillo = () => {
    if (
      selectedDepartureAirport === '' ||
      selectedArrivalAirport === '' ||
      dateDepartureSelectedSimple === '' ||
      countAdult === '' ||
      countNiños === '' ||
      countBebes === ''
    ) {
      console.log('Por favor seleccionar todos los campos soy sencillo');
    } else if (selectedDepartureAirport === selectedArrivalAirport) {
      console.log('La ciudad de destino no puede ser igual a la ciudad de retorno');
    } else {
      setDataToFilter({
        selectedDepartureAirport,
        selectedArrivalAirport,
        dateDepartureSelectedSimple,
        countAdult,
        countNiños,
        countBebes,
        couponCode,
      });


    }
  }

  //********************************************************
  const filterToFlight = (data) => {
    const filteredCities = data.filter((item) => item.departure_airport.city === selectedDepartureAirport && item.arrival_airport.city === selectedArrivalAirport);
    console.log('Ciudades Filtradas:', filteredCities);
    setDataCitiesFinded(filteredCities);
    const filteredDates = filteredCities.filter((item) => item.departure_date === dateDepartureSelected);
    console.log('Fechas filtradas:', filteredDates);
    setDataDatesFinded(filteredDates);

    if (dataDatesFinded.length === 0) {
      console.log("no hay fechas disponibles para el destino seleccionado")

    } else {
      console.log('resultados de busqueda salida', filteredDates)

      // navigate('flight')
    }
  }

 

  //**************************************************************

  const filterToFlightArrival = (data) => {
    if (dateArrivalSelected !== '') {
      const filteredCitiesRound = data.filter((item) => item.departure_airport.city === selectedArrivalAirport && item.arrival_airport.city === selectedDepartureAirport);
      console.log('Ciudades Filtradas Round:', filteredCitiesRound);
      setDataCitiesFindedRound(filteredCitiesRound);
      console.log('soy data cities finded round', dataCitiesFindedRound)

      if (dataCitiesFindedRound.length === 0) {
        console.log("no hay vuelos disponibles para el regreso")

      } else {
        // console.log('Hemos encontrado vuelos para ti!', dateArrivalSelected) no usar
        const filteredDatesRound = dataCitiesFindedRound.filter((item) => item.departure_date === dateArrivalSelected);
        console.log('Fechas filtradas Round:', filteredDatesRound);
        setDataDatesFindedRound(filteredDatesRound);
      }
    }
  }

const conditionalToSearch = async () => {
  if (activeButton === 'viajeRedondo') {

    validateSearchRedondo();

    try {
      const response = await axios.get('https://tickets-backend.herokuapp.com/flights', {
        params: { ...dataToFilter },
      });

      const data = response.data;
      console.log('Información filtrada:', data);
      console.log(typeof data);

      // ********************FUNCIÓN PARA FILTRAR VUELOS DE IDA ************************

      filterToFlight(data)

      // ********************FUNCIÓN PARA FILTRAR VUELOS DE VUELTA************************

      filterToFlightArrival(data)

     // navigate('/flight')


    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }

  } else {

    validateSearchSencillo()


    try {
      const response = await axios.get('https://tickets-backend.herokuapp.com/flights', {
        params: { ...dataToFilter },
      });

      const data = response.data;
      console.log('Información filtrada:', data);
      console.log(typeof data);

      // ********************FUNCIÓN PARA FILTRAR VUELOS DE IDA ************************


      filterToFlight(data)


    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }

}




 
  // *************************************************
// const confirmNavigate = () => {
//   const keys = Object.keys(sessionStorage);
//   const allInfoBookingFromStorage = {};

//   keys.forEach((key) => {
//       const item = JSON.parse(sessionStorage.getItem(key));
//       if (item && Object.keys(item).length > 0) {
//           allInfoBookingFromStorage[key] = item;
//       }
    
//   });
//   if (allInfoBookingFromStorage.filteredDatesRound !== [] || allInfoBookingFromStorage.filteredDatesRound !== {} || || allInfoBookingFromStorage.filteredDatesRound !== null ) 
  
    
//   } else {
//   }

// }
// confirmNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    conditionalToSearch()

    


  

    //navigate('flight')
  
  }

  // const handleToFlight = () => {


  //   const keys = Object.keys(sessionStorage);
  //   const allInfoBookingFromStorage = {};
  
  //   keys.forEach((key) => {
  //       const item = JSON.parse(sessionStorage.getItem(key));
  //       if (item && Object.keys(item).length > 0) {
  //           allInfoBookingFromStorage[key] = item;
  //       }
      
  //   });
  //   if (allInfoBookingFromStorage.filteredDatesRound !== [] || allInfoBookingFromStorage.filteredDatesRound !== {} || allInfoBookingFromStorage.filteredDatesRound !== null || allInfoBookingFromStorage.filteredDatesRound !== undefined ) {
  //     navigate('/flight')
    
  // }


  // }

  // const handleClickSubmit = () => {
  //   const submitButton = document.getElementById('submitButton');
  //   submitButton.addEventListener('click', handleSubmit);
  //   navigate('flight')
  // }
  
  // // Llama a handleClickSubmit() cuando el DOM haya cargado
  // document.addEventListener('DOMContentLoaded', handleClickSubmit);


  const handleFormClick = (e) => {
    e.stopPropagation();
    console.log('Se hizo clic en el botón de buscar vuelos');
    navigate('flight')
  };


  return (
    <>
      <form onSubmit={handleSubmit} className='form'  >
        <div className='container__img'>
          <figure>
            <img src={imgPlane} alt="" />
          </figure>
        </div>
        <section className='container__search'>
          <h3>Busca un nuevo destino y <br /> comienza la aventura.</h3>
          <p>Descubre vuelos al mejor precio y perfectos para cualquier viaje</p>
          <div className='container__search__option'>
            <button
              className={`button ${activeButton === 'viajeRedondo' ? 'active' : ''}`}
              onClick={() => handleClick('viajeRedondo')}
            >
              Viaje redondo
            </button>
            <button
              className={`button ${activeButton === 'viajeSencillo' ? 'active' : ''}`}
              onClick={() => handleClick('viajeSencillo')}
            >
              Viaje sencillo
            </button>
          </div>

          <div className='container__search__cities'>
            <div className="container__search__city" onClick={openDepartureModal} style={{ position: 'relative' }}>

              <div>
                {selectedDepartureAirport === '' ? <h3>Ciudad de México</h3> : <h3>{selectedDepartureAirport}</h3>}
              </div>

              <div>
                <p>Origen</p>
              </div>
              {isDepartureModalOpen && (
                <UseAutocomplete closeModal={closeDepartureModal}
                  onSelectAirport={setSelectedDepartureAirport}
                  itemToSearch={'departure_airport'}
                  style={{ position: 'absolute' }} />
              )}
            </div>
            <div className="container__search__city" onClick={openArrivalModal} style={{ position: 'relative' }}>
              <div>
                {selectedArrivalAirport === '' ? <h3>---</h3> : <h3>{selectedArrivalAirport}</h3>}
              </div>
              <div>
                <p>Selecciona un destino</p>
              </div>
              {isArrivalModalOpen && (
                <UseAutocomplete closeModal={closeArrivalModal}
                  onSelectAirport={setSelectedArrivalAirport}
                  itemToSearch={'arrival_airport'}
                  style={{ position: 'absolute' }} />
              )}
            </div>
          </div>
          <div className='container__search__dates'>
            {activeButton === 'viajeRedondo' ?
              //  <BasicDateRangePicker/>
              <DateRangeValidationShouldDisableDate />
              // <CustomDatePicker />
              : <div className='container__search__dates'>
                <DatePickerViews />
                <FormPropsDatePickers />
              </div>
            }
          </div>

          <div className='container__search__passenger'>
            <div className='container__searchQuantiy'>
              {/* <SelectPassenger/> */}

              <Accordion style={{ background: 'transparent' }}>
                <AccordionSummary style={{ height: '56px', border: '1.5px solid #D3CBCB', borderRadius: '4px', borderBottom: 0 }} expandIcon={<ExpandMoreOutlined />}>
                  {/* <div>Pasajeros</div> <br/> */}
                  <Typography>{countAdult} Adulto   </Typography>
                  {countNiños !== 0 && <Typography>,  {countNiños} Niños   </Typography>}
                  {countBebes !== 0 && <Typography>,  {countBebes} Bebes </Typography>}

                  {/* <Typography>{countBebes} Bebes </Typography> */}
                </AccordionSummary>
                <AccordionDetails style={{ position: 'absolute', left: '295px', top: '0px', backgroundColor: '#fff', zIndex: '10000', borderRadius: '0 0 1rem 1rem' }}>
                  <div name={countAdult} style={{ display: 'flex', justifyContent: 'center' }}>
                    <QuantityPassengers
                      name={'Adulto   '} description={'(13 + años)'} count={countAdult} setCount={setCountAdult}
                    />
                  </div>
                  <div name={countNiños} style={{ display: 'flex', justifyContent: 'center' }}>
                    <QuantityPassengers
                      name={'Niños'} description={'(2 a 12 años)'} count={countNiños} setCount={setCountNiños}
                    />
                  </div>

                  <div name={countBebes} style={{ display: 'flex', justifyContent: 'center' }}>
                    <QuantityPassengers
                      name={'Bebes'} description={'(0 + 23 meses)'} count={countBebes} setCount={setCountBebes}
                    />
                  </div>
                </AccordionDetails>
              </Accordion>
              {/* <MultipleSelect className='container__search__quantity' />  */}
            </div>
            <div className='container__serchCoupon'>
              <CouponDiscount couponCode={couponCode} setCouponCode={setCouponCode} className='container__search__coupon' />
            </div>
          </div>
          <div className='container__search__button'>
            <button type="submit" onClick={handleFormClick} className='container__search__btn'><span><FontAwesomeIcon icon={faPlane} /></span><p className='container__search__btn__plane'>Buscar vuelos</p></button>
          </div>
        </section>
      </form>
    </>
  )

}

export default Search
