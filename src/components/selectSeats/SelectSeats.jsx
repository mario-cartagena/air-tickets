import React from 'react'
import './stylesSelectSeats.scss'
import RowSeats from './rowSeats/RowSeats';
import RowLettersSeats from './rowLetters/RowLettersSeats';

const SelectSeats = () => {

    return (
        <>
            <div className='container__ppl'>
                <h3>Selecciona tus asientos</h3>
                <RowLettersSeats />
                <p>Salida rápida</p>
                <RowSeats number={1} />
                <RowSeats number={2} />
                <RowSeats number={3} />
                <RowSeats number={4} />
                <RowSeats number={5} />
                <p>Salida Estándar</p>
                <RowSeats number={6} />
                <RowSeats number={7} />
                <RowSeats number={8} />
                <RowSeats number={9} />
                <RowSeats number={10} />
            </div>
        </>
    )
}

export default SelectSeats