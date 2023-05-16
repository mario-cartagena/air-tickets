import React from 'react';
import './MainPayMethods.scss'
import {paymentCredit, paymentCash} from '../../dataPayment/dataPayment';

const MainPayMethods = () => {
  return (
    <>
    <section className='main'>
        <h1 className='main__title'>Pago Seguro</h1>
        <div className='main__payment'>
            <div className='main__paymentCredit'>
                <p>Tarjeta de crédito, tarjeta de débito y pago electrónico</p>
                <div className='main__paymentCards'>
                    {paymentCredit.map((item) => (
                        <figure key={item.id}>
                            <img src={item.image} alt={item.alt} />
                        </figure>
                    ))}
                </div>
            </div>  
            <div className='main__paymentCash'>
                <p>Efectivo en cualquiera de las sucursales participantes</p>
                <div className='main__paymentCards'>
                    {paymentCash.map((item) => (
                        <figure key={item.id}>
                            <img src={item.image} alt={item.alt} />
                        </figure>
                    ))}
                </div>
            </div> 
        </div> 
    </section>
    </>
  )
}

export default MainPayMethods