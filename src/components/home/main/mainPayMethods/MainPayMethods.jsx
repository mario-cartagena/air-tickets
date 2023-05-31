import React from 'react';
import './MainPayMethods.scss'
import {paymentCredit, paymentCash} from '../../../../utils/dataPayment';

const MainPayMethods = () => {
  return (
    <>
    <div className='paymethods'>
        <h1 className='paymethods__title'>Pago seguro</h1>
        <div className='paymethods__payment'>
            <div className='paymethods__paymentCredit'>
                <p>Tarjeta de crédito, tarjeta de débito y pago electrónico</p>
                <div className='paymethods__paymentCards'>
                    {paymentCredit.map((item) => (
                        <figure key={item.id}>
                            <img src={item.image} alt={item.alt} />
                        </figure>
                    ))}
                </div>
            </div>  
            <div className='paymethods__paymentCash'>
                <p>Efectivo en cualquiera de las sucursales participantes</p>
                <div className='paymethods__paymentCards'>
                    {paymentCash.map((item) => (
                        <figure key={item.id}>
                            <img src={item.image} alt={item.alt} />
                        </figure>
                    ))}
                </div>
            </div> 
        </div> 
    </div>
    </>
  )
}

export default MainPayMethods