import React from 'react'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Payment = () => {
    return (
        <>
            <div className='container__search__cities'>
                <div className='container__search__city'  >
                    <div>
                        <h3>Ciudad de Mexico</h3>
                    </div>
                    <div>
                        <p>Origen</p>
                    </div>
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

                <div className='container__search__date'>
                    <p>Salida</p>
                </div>
                <div className='container__search__date'>
                    <p>Regreso</p>
                </div>
            </div>

            <div className='container__search__passenger'>
                <div className='container__searchQuantiy'>

                    <div className='container__search__quantity'>
                        <label>Pasajeros</label>

                    </div>
                    <div className='container__search__coupon'>
                    </div>
                </div>
                <div className='container__serchCoupon'>
                    <CouponDiscount className='container__search__coupon' />
                </div>
            </div>
            <div className='container__search__button'>
                <button className='container__search__btn'><span><FontAwesomeIcon icon={faThumbsUp } /></span><p className='container__search__btn__plane'>Buscar vuelos</p></button>
            </div>

  </>
  )
}

export default Payment