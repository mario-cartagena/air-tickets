import React from 'react';
import './stylesRowSeats.scss';

const RowLettersSeats = () => {
  const letters = ['A', 'B', 'C', ' ', 'D', 'E', 'F'];

  return (
    <>
    <div className='seat__container'>
        <div className='seat__container__row'>
          {letters.map((letter, index) => (
            <div className='seat__container__cell bg-white' key={index}>
              <p>{letter}</p>
            </div>
          ))}
        </div>
      </div>
 
    </>
  );
};

export default RowLettersSeats;
