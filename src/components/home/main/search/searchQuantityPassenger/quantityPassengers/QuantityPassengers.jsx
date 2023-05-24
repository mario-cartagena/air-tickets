import React, { useState, useCallback } from 'react';
import './styleQuantityPassengers.scss'

const QuantityPassengers =
  ({
    quantitySelectedAdult,
    quantitySelectedNiños,
    quantitySelectedBebes,
    setQuantitySelectedAdult,
    setQuantitySelectedNiños,
    setQuantitySelectedBebes
  }) => {


    const [countAdult, setCountAdult] = useState(0);
    const [countNiños, setCountNiños] = useState(0);
    const [countBebes, setCountBebes] = useState(0);

    const incrementAdult = () => {

      setCountAdult((prevCount) => prevCount + 1);
      setQuantitySelectedAdult(countAdult)

    }

    const decrementAdult = () => {
      setCountAdult((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    }


    const incrementNiños = () => {
      setCountNiños((prevCount) => prevCount + 1);
      setQuantitySelectedNiños(countNiños)
    }

    const decrementNiños = () => {
      setCountNiños((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    }


    const incrementBebes = () => {
      setCountBebes((prevCount) => prevCount + 1);
    }

    const decrementBebes = () => {
      setCountBebes((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    }

    return (
      <section className='container'>
        <div className='container__row'>
          <div className='container__categories'>
            <p>Adulto</p>
            <p>(13 + años)</p>
          </div>
          <div className='container__quantity'>
            <button onClick={decrementAdult} className='container__quantity--decrement'>-</button>
            <p>{countAdult}</p>
            <button onClick={incrementAdult} className='container__quantity--increment'>+</button>
          </div>
        </div>
        <div className='container__row'>
          <div className='container__categories'>
            <p>Niños</p>
            <p>(2 - 12años)</p>
          </div>
          <div className='container__quantity'>
            <button onClick={decrementNiños} className='container__quantity--decrement'>-</button>
            <p>{countNiños}</p>
            <button onClick={incrementNiños} className='container__quantity--increment'>+</button>
          </div>
        </div>
        <div className='container__row'>
          <div className='container__categories'>
            <p>Bebes</p>
            <p>(0 a 23meses)</p>
          </div>
          <div className='container__quantity'>
            <button onClick={decrementBebes} className='container__quantity--decrement'>-</button>
            <p>{countBebes}</p>
            <button onClick={incrementBebes} className='container__quantity--increment'>+</button>
          </div>
        </div>
      </section>
    );
  };

export default QuantityPassengers;


// import React, { useState } from 'react';

// const QuantityPassengers = () => {
//   const [count, setCount] = useState(0);
//   const quantitySelected = count;

//   const increment = () => {
//     setCount((prevCount) => prevCount + 1);
//   };

//   const decrement = () => {
//     setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
//   };

//   return (
//     <div>
//       <p>Quantity: {count}</p>
//       <p>Quantity Selected: {quantitySelected}</p>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//     </div>
//   );
// };

// export default QuantityPassengers;
