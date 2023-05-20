import React, { useState, useEffect, useCallback } from 'react';
import './stylesRowSeats.scss';
import { GetFlights } from '../../services/GetFlights';

const RowSeats = ({ number }) => {
    const [flights, setFlights] = useState([]);
    const [seatStatuses, setSeatStatuses] = useState({});

    const handleSeat = useCallback((key) => {
        flights.forEach((item) => {
            const result = item.seats.find((element) => element.id === key);
            if (result && result.status) {
                if (result.status.available) {
                    setSeatStatuses((prevStatuses) => ({
                        ...prevStatuses,
                        [key]: 'available',
                    }));
                    console.log(`soy ${result.id} Estoy disponible`);
                } else if (result.status.reserved) {
                    setSeatStatuses((prevStatuses) => ({
                        ...prevStatuses,
                        [key]: 'reserved',
                    }));
                    console.log(`soy ${result.id} Estoy reservada`);
                } else if (result.status.selected) {
                    setSeatStatuses((prevStatuses) => ({
                        ...prevStatuses,
                        [key]: 'selected',
                    }));
                    console.log(`soy ${result.id} Estoy seleccionada`);
                }
            }
        });
    }, [flights]);

    useEffect(() => {
        GetFlights()
            .then((response) => {
                setFlights(response);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        const seatKeys = ['A', 'B', 'C', 'D', 'E', 'F']; // Claves de los asientos
        const allSeatCombinations = seatKeys.map((key) => `${number}${key}`); // Todas las combinaciones de asientos

        allSeatCombinations.forEach((seatKey) => {
            handleSeat(seatKey); // Ejecutar handleSeat para cada combinación de asiento
        });
    }, [handleSeat, number]);

    const handleSeatToSelected = (key) => {
        const seatStatus = seatStatuses[key];
        if (seatStatus === 'available') {
            setSeatStatuses((prevStatuses) => ({
                ...prevStatuses,
                [key]: 'selected',
            }));
            console.log(`soy ${key} Estoy seleccionada`);
        } else if (seatStatus === 'selected') {
            setSeatStatuses((prevStatuses) => ({
                ...prevStatuses,
                [key]: 'available',
            }));
            console.log(`soy ${key} Estoy disponible`);
        }
    };

    return (
        <>
            <div className='seat__container'>
                <div className='seat__container__row'>
                    <div
                        className={`seat__container__cell ${seatStatuses[`${number}A`]}`}
                        onClick={() => handleSeatToSelected(`${number}A`)}
                    ></div>
                    <div
                        className={`seat__container__cell ${seatStatuses[`${number}B`]}`}
                        onClick={() => handleSeatToSelected(`${number}B`)}
                    ></div>
                    <div
                        className={`seat__container__cell ${seatStatuses[`${number}C`]}`}
                        onClick={() => handleSeatToSelected(`${number}C`)}
                    ></div>
                    <div className='seat__container__cell aisle'>
                        <p>{number}</p>
                    </div>
                    <div
                        className={`seat__container__cell ${seatStatuses[`${number}D`]}`}
                        onClick={() => handleSeatToSelected(`${number}D`)}
                    ></div>
                    <div
                        className={`seat__container__cell ${seatStatuses[`${number}E`]}`}
                        onClick={() => handleSeatToSelected(`${number}E`)}
                    ></div>
                    <div
                        className={`seat__container__cell ${seatStatuses[`${number}F`]}`}
                        onClick={() => handleSeatToSelected(`${number}F`)}
                    ></div>
                </div>
            </div>
        </>
    );
};

export default RowSeats;
