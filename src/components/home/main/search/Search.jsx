import React, { useEffect, useState } from 'react'
import UseAutocomplete from './searchSelectAirport/UseAutocomplete'
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styleSearch.scss'
import CouponDiscount from './couponDiscount/CouponDiscount';
import MultipleSelect from './searchQuantityPassenger/quantityPassengers/multipleSelect/MultipleSelect';
import imgPlane from "../../../../assets/img/bg-flight.jpeg"
import BasicDateRangePicker from './searchSchedule/basicDateRangePicker/BasicDateRangePicker';
import DatePickerViews from './searchSchedule/datePickerViews/DatePickerViews';
import FormPropsDatePickers from './searchSchedule/formProps DatePicker/FormPropsFatePicker';

function Search() {

  // ********************FUNCIÓN PARA MANEJAR EL ESTADO DE BOTON VIAJE REDONDO************************

  const [activeButton, setActiveButton] = useState('viajeRedondo');

  const handleClick = (option) => {
    if (activeButton !== option) {
      console.log('active')
      setActiveButton(option);
    }
  };

  // ********************FUNCIÓN PARA MANEJAR LOS ESTADOS DEL BUSCADOR DE AEROPUERTO************************

  const [selectedAirport, setSelectedAirport] = useState('');
  console.log(selectedAirport)

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




  return (
    <>
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
          {activeButton == 'viajeRedondo' ?
            <BasicDateRangePicker />
            : <div className='container__search__dates'> <DatePickerViews/>
                    <FormPropsDatePickers/>
              </div>
          }
        </div>

        <div className='container__search__passenger'>
          <div className='container__searchQuantiy'>
            <MultipleSelect className='container__search__quantity' />
          </div>
          <div className='container__serchCoupon'>
            <CouponDiscount className='container__search__coupon' />
          </div>
        </div>
        <div className='container__search__button'>
          <button className='container__search__btn'><span><FontAwesomeIcon icon={faPlane} /></span><p className='container__search__btn__plane'>Buscar vuelos</p></button>
        </div>
      </section>

    </>
  )
}

export default Search
