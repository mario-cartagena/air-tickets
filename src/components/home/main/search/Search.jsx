import React, {useState} from 'react'
import UseAutocomplete from './UseAutocomplete'
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styleSearch.scss'
import CouponDiscount from '../../../couponDiscount/CouponDiscount';
import MultipleSelect from '../../../multipleSelect/MultipleSelect';
import imgPlane from "../../../../assets/img/bg-flight.jpeg"
import BasicDateRangePicker from '../../../basicDateRangePicker/BasicDateRangePicker';

function Search() {

  const [activeButton, setActiveButton] = useState('viajeRedondo');

  const handleClick = (option) => {
    if (activeButton !== option) {
      console.log('active')
      setActiveButton(option);
    }
  };

  const [isModalOpen, setModalOpen] = useState(false); // Estado para controlar la apertura del modal

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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

    <div  className='container__search__cities'>
      <div className='container__search__city'  onClick={openModal} style={{position:'relative'}}>
        <div>
          <h3>Ciudad de Mexico</h3>
        </div>
        <div>
         <p>Origen</p> 
        </div>
        {isModalOpen && <UseAutocomplete closeModal={closeModal} style={{position:'absolute'}}/>} {/* Renderiza el modal si isModalOpen es verdadero */}
      </div>
      <div className='container__search__city'>
        <div>
          <h3>---</h3>
        </div>
        <div>
         <p>Selecciona un destino</p> 
        </div>
      </div>
      
      

    </div>
    <div className='container__search__dates'>
    <BasicDateRangePicker/>
      {/* <div className='container__search__date'>
        <p>Salida</p>
      </div>
      <div className='container__search__date'>
        <p>Regreso</p>
      </div> */}
    </div>

    <div className='container__search__passenger'>
      <div className='container__searchQuantiy'>
    <MultipleSelect className='container__search__quantity'/>
      {/* <div className='container__search__quantity'>
        <label>Pasajeros</label>
        
      </div> */}
      {/* <div className='container__search__coupon'>
      </div> */}
      </div>
      <div className='container__serchCoupon'>
      <CouponDiscount className='container__search__coupon'/>
      </div>
    </div>
    <div className='container__search__button'>
      <button className='container__search__btn'><span><FontAwesomeIcon icon={faPlane} /></span><p  className='container__search__btn__plane'>Buscar vuelos</p></button>
    </div>
    </section>

    </>
  )
}

export default Search
