import React from 'react';
import './styleQuantityPassengers.scss'


const QuantityPassengers = ({ name, description, count, setCount }) => {

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  console.log(count)

  return (
    <section className='container'>
      <div className='container__row'>
        <div className='container__categories'>
          <p>{name}</p>
          <p>{description}</p>
        </div>
        <div className='container__quantity'>
          <button onClick={decrement} className='container__quantity--decrement'>-</button>
          <p>{count}</p>
          <button onClick={increment} className='container__quantity--increment'>+</button>
        </div>
      </div>
    </section>
  );
};

export default QuantityPassengers;
