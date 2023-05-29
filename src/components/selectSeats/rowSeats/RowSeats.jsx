import React, { useState, useEffect, useCallback, useContext } from 'react';
import './stylesRowSeats.scss';
import { GetFlights } from '../../../services/GetFlights';
import { AppContext } from '../../home/main/search/searchSchedule/appContext/AppContext';

const RowSeats = ({ number, selectedSeatCount, setSelectedSeatCount }) => {
  const [flights, setFlights] = useState([]);
  const [seatStatuses, setSeatStatuses] = useState({});
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedSeatsByRow, setSelectedSeatsByRow] = useState({});
  const { departureInfoBaggage, arrivalInfoBaggage, parsedDepartureInfoBaggage  } = useContext(AppContext);
  // console.log(parsedDepartureInfoBaggage)
 
  const handleSeat = useCallback((key) => {
    // console.log(flights)
    const flightFiltered = flights.find((e) => e.id == parsedDepartureInfoBaggage.flightId)
    flights.forEach((item) => {
      // console.log(item.id);
      const result = flightFiltered.seats.find((element) => element.id === key);
      if (result && result.status) {
        if (result.status.available) {
          setSeatStatuses((prevStatuses) => ({
            ...prevStatuses,
            [key]: 'available',
          }));
          console.log(`Seat ${result.id} is available`);
        } else if (result.status.reserved) {
          setSeatStatuses((prevStatuses) => ({
            ...prevStatuses,
            [key]: 'reserved',
          }));
          console.log(`Seat ${result.id} is reserved`);
        } else if (result.status.selected) {
          setSeatStatuses((prevStatuses) => ({
            ...prevStatuses,
            [key]: 'selected',
          }));
          // console.log(`Seat ${result.id} is selected`);
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
    const seatKeys = ['A', 'B', 'C', 'D', 'E', 'F'];
    const allSeatCombinations = seatKeys.map((key) => `${number}${key}`);

    allSeatCombinations.forEach((seatKey) => {
      handleSeat(seatKey);
    });
  }, [handleSeat, number]);

  console.log('selected in row', selectedSeatCount);

  const handleSeatToSelected = (key) => {
    const seatStatus = seatStatuses[key];
    const MAX_SELECTED_SEATS = 3;

    const selectedSeatCount = Object.values(seatStatuses).filter(
      (status) => status === 'selected'
    ).length;

    if (seatStatus === 'available' && selectedSeatCount <= MAX_SELECTED_SEATS) {
      setSeatStatuses((prevStatuses) => ({
        ...prevStatuses,
        [key]: 'selected',
      }));
      setSelectedSeatCount((prevCount) => prevCount + 1);
      setSelectedSeats((prevSelectedSeats) => [...prevSelectedSeats, key]);
      setSelectedSeatsByRow((prevSelectedSeatsByRow) => {
        const rowNumber = key[0];
        const updatedSeatsByRow = {
          ...prevSelectedSeatsByRow,
          [rowNumber]: [...(prevSelectedSeatsByRow[rowNumber] || []), key],
        };

        return updatedSeatsByRow;
      });
      console.log('Seat:', key);
    } else if (seatStatus === 'selected') {
      setSeatStatuses((prevStatuses) => ({
        ...prevStatuses,
        [key]: 'available',
      }));
      setSelectedSeatCount((prevCount) => prevCount - 1);
      setSelectedSeats((prevSelectedSeats) =>
        prevSelectedSeats.filter((seat) => seat !== key)
      );
      setSelectedSeatsByRow((prevSelectedSeatsByRow) => {
        const rowNumber = key[0];
        const updatedSeatsByRow = {
          ...prevSelectedSeatsByRow,
          [rowNumber]: prevSelectedSeatsByRow[rowNumber].filter(
            (seat) => seat !== key
          ),
        };
        return updatedSeatsByRow;
      });
      console.log('Unselected Seat:', key);
    }
  };


  const [arrayAsientosSeleccionados, setArrayAsientosSeleccionados] = useState([]);
  const [seatRow1, setSeatRow1] = useState('');
  const [seatRow2, setSeatRow2] = useState('');
  const [seatRow3, setSeatRow3] = useState('');
  const [seatRow4, setSeatRow4] = useState('');
  const [seatRow5, setSeatRow5] = useState('');
  const [seatRow6, setSeatRow6] = useState('');
  const [seatRow7, setSeatRow7] = useState('');
  const [seatRow8, setSeatRow8] = useState('');
  const [seatRow9, setSeatRow9] = useState('');
  const [seatRow10, setSeatRow10] = useState('');
 const [objetoAsientos, setObjetoAsientos] = useState([])
 
 

 useEffect(() => {
   console.log('Asientos seleccionados por fila:', selectedSeatsByRow);
   setArrayAsientosSeleccionados(selectedSeatsByRow);
 
   // Verificar la fila seleccionada y realizar acciones específicas
   Object.keys(selectedSeatsByRow).forEach((key) => {
     if (key === '1') {
      //  console.log('Fila 1 seleccionada');
      setSeatRow1(selectedSeatsByRow[key]); // Asignar el valor correspondiente a la variable de estado para la fila 1
   
     } else if (key === '2') {
      //  console.log('Fila 2 seleccionada');
       setSeatRow2(selectedSeatsByRow[key]); // Asignar el valor correspondiente a la variable de estado para la fila 2
 
      } else if (key === '3') {
      //  console.log('Fila 3 seleccionada');
       setSeatRow3(selectedSeatsByRow[key]); // Asignar el valor correspondiente a la variable de estado para la fila 2
     } else if (key === '4') {
      //  console.log('Fila 4 seleccionada');
       setSeatRow4(selectedSeatsByRow[key]); // Asignar el valor correspondiente a la variable de estado para la fila 2
     } else if (key === '5') {
      //  console.log('Fila 5 seleccionada');
       setSeatRow5(selectedSeatsByRow[key]); // Asignar el valor correspondiente a la variable de estado para la fila 2
     }  else if (key === '6') {
      //  console.log('Fila 6 seleccionada');
       setSeatRow6(selectedSeatsByRow[key]); // Asignar el valor correspondiente a la variable de estado para la fila 2
     } else if (key === '7') {
      // console.log('Fila 7 seleccionada');
      setSeatRow7(selectedSeatsByRow[key]); // Asignar el valor correspondiente a la variable de estado para la fila 2
    } else if (key === '8') {
      // console.log('Fila 8 seleccionada');
      setSeatRow8(selectedSeatsByRow[key]); // Asignar el valor correspondiente a la variable de estado para la fila 2
    } else if (key === '9') {
      // console.log('Fila 9 seleccionada');
      setSeatRow9(selectedSeatsByRow[key]); // Asignar el valor correspondiente a la variable de estado para la fila 2
    } else if (key === '10') {
      // console.log('Fila 10 seleccionada');
      setSeatRow10(selectedSeatsByRow[key]); // Asignar el valor correspondiente a la variable de estado para la fila 2
    }
     // Agrega más condiciones según las filas que desees manejar
   });
 
   // Utilizar las variables de estado correspondientes a cada fila después del forEach
  }, [selectedSeatsByRow]);  
  // console.log('Variables:', seatRow1, seatRow2, seatRow3, seatRow4);
  // sessionStorage.setItem('seatRow1', JSON.stringify(seatRow1));
  // sessionStorage.setItem('seatRow2', JSON.stringify(seatRow2));
  // console.log('soy array completo', arrayAsientosSeleccionados)

  // useEffect(() => {
  //   const seatRow1FromStorage = JSON.parse(sessionStorage.getItem('seatRow1'));
  //   const seatRow2FromStorage = JSON.parse(sessionStorage.getItem('seatRow2'));
  //   const seatRow3FromStorage = JSON.parse(sessionStorage.getItem('seatRow3'));
  //   const seatRow4FromStorage = JSON.parse(sessionStorage.getItem('seatRow4'));
  //   const seatRow5FromStorage = JSON.parse(sessionStorage.getItem('seatRow5'));
  //   const seatRow6FromStorage = JSON.parse(sessionStorage.getItem('seatRow6'));
  //   const seatRow7FromStorage = JSON.parse(sessionStorage.getItem('seatRow7'));
  //   const seatRow8FromStorage = JSON.parse(sessionStorage.getItem('seatRow8'));
  //   const seatRow9FromStorage = JSON.parse(sessionStorage.getItem('seatRow9'));
  //   const seatRow10FromStorage = JSON.parse(sessionStorage.getItem('seatRow10'));
  
  //   if (seatRow1FromStorage) {
  //     setSeatRow1(seatRow1FromStorage);
  //   }
  
  //   if (seatRow2FromStorage) {
  //     setSeatRow2(seatRow2FromStorage);
  //   }
  //   if (seatRow3FromStorage) {
  //     setSeatRow3(seatRow3FromStorage);
  //   }
  //   if (seatRow4FromStorage) {
  //     setSeatRow4(seatRow4FromStorage);
  //   }
  //   if (seatRow5FromStorage) {
  //     setSeatRow5(seatRow5FromStorage);
  //   }
  //   if (seatRow6FromStorage) {
  //     setSeatRow6(seatRow6FromStorage);
  //   }
  //   if (seatRow7FromStorage) {
  //     setSeatRow7(seatRow7FromStorage);
  //   }
  //   if (seatRow8FromStorage) {
  //     setSeatRow8(seatRow8FromStorage);
  //   }
  //   if (seatRow9FromStorage) {
  //     setSeatRow9(seatRow9FromStorage);
  //   }
  //   if (seatRow10FromStorage) {
  //     setSeatRow10(seatRow10FromStorage);
  //   }

  
  // }, []);

  useEffect(() => {
    sessionStorage.setItem('seatRow1', JSON.stringify(seatRow1));
  }, [seatRow1]);
  
  useEffect(() => {
    sessionStorage.setItem('seatRow2', JSON.stringify(seatRow2));
  }, [seatRow2]);

  useEffect(() => {
    sessionStorage.setItem('seatRow3', JSON.stringify(seatRow3));
  }, [seatRow3]);
  useEffect(() => {
    sessionStorage.setItem('seatRow4', JSON.stringify(seatRow4));
  }, [seatRow4]);
  useEffect(() => {
    sessionStorage.setItem('seatRow5', JSON.stringify(seatRow5));
  }, [seatRow5]);
  useEffect(() => {
    sessionStorage.setItem('seatRow6', JSON.stringify(seatRow6));
  }, [seatRow6]);
  useEffect(() => {
    sessionStorage.setItem('seatRow7', JSON.stringify(seatRow7));
  }, [seatRow7]);
  useEffect(() => {
    sessionStorage.setItem('seatRow8', JSON.stringify(seatRow8));
  }, [seatRow8]);
  useEffect(() => {
    sessionStorage.setItem('seatRow9', JSON.stringify(seatRow9));
  }, [seatRow9]);
  useEffect(() => {
    sessionStorage.setItem('seatRow10', JSON.stringify(seatRow10));
  }, [seatRow10]);

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
