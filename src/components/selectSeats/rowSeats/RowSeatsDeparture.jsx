import React, { useState, useEffect, useCallback, useContext } from 'react';
import './stylesRowSeats.scss';
import { GetFlights } from '../../../services/GetFlights';
import { AppContext } from '../../home/main/search/searchSchedule/appContext/AppContext';

const RowSeatsDeparture = ({ number, selectedSeatCount, setSelectedSeatCount }) => {
  const [flights, setFlights] = useState([]);
  const [seatStatuses, setSeatStatuses] = useState({});
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedSeatsByRow, setSelectedSeatsByRow] = useState({});
  const { departureInfoBaggage, arrivalInfoBaggage, parsedDepartureInfoBaggage  } = useContext(AppContext);
//   console.log(parsedDepartureInfoBaggage)  
  const flighToFilter = parsedDepartureInfoBaggage.flightId
  const flightFiltered = flights.find((e) => e.id == flighToFilter)
 
  const handleSeat = useCallback((key) => {
    // console.log(flights)
    flights.forEach((item) => {
      // console.log(item.id);
      const result = flightFiltered.seats.find((element) => element.id === key);
      if (result && result.status) {
        if (result.status.available) {
          setSeatStatuses((prevStatuses) => ({
            ...prevStatuses,
            [key]: 'available',
          }));
          // console.log(`Seat ${result.id} is available`);
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
          alert(`Seat ${result.id} is selected`);
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

  
  const handleSeatToSelected = (key) => {
    const seatStatus = seatStatuses[key];
    // const MAX_SELECTED_SEATS = 3;
    
    const selectedSeatCount = Object.values(seatStatuses).filter(
      (status) => status === 'selected'
      ).length;
      
      console.log('selected in row', selectedSeatCount);
      if (seatStatus === 'available') {
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
      // console.log('Seat:', key);
    } else if (seatStatus === 'selected' ) {
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
  const [seatRowDeparture1, setSeatRowDeparture1] = useState('');
  const [seatRowDeparture2, setSeatRowDeparture2] = useState('');
  const [seatRowDeparture3, setSeatRowDeparture3] = useState('');
  const [seatRowDeparture4, setSeatRowDeparture4] = useState('');
  const [seatRowDeparture5, setSeatRowDeparture5] = useState('');
  const [seatRowDeparture6, setSeatRowDeparture6] = useState('');
  const [seatRowDeparture7, setSeatRowDeparture7] = useState('');
  const [seatRowDeparture8, setSeatRowDeparture8] = useState('');
  const [seatRowDeparture9, setSeatRowDeparture9] = useState('');
  const [seatRowDeparture10, setSeatRowDeparture10] = useState('');
 const [objetoAsientos, setObjetoAsientos] = useState([])



 

 useEffect(() => {
   console.log('Asientos seleccionados por fila:', selectedSeatsByRow);
   setArrayAsientosSeleccionados(selectedSeatsByRow);
 
   // Verificar la fila seleccionada y realizar acciones específicas
   Object.keys(selectedSeatsByRow).forEach((key) => {
     if (key === '1') {
      setSeatRowDeparture1(selectedSeatsByRow[key]);    
     } else if (key === '2') {
       setSeatRowDeparture2(selectedSeatsByRow[key]); 
 
      } else if (key === '3') {
       setSeatRowDeparture3(selectedSeatsByRow[key]); 
     } else if (key === '4') {
       setSeatRowDeparture4(selectedSeatsByRow[key]); 
     } else if (key === '5') {
       setSeatRowDeparture5(selectedSeatsByRow[key]); 
     }  else if (key === '6') {
       setSeatRowDeparture6(selectedSeatsByRow[key]); 
     } else if (key === '7') {
      setSeatRowDeparture7(selectedSeatsByRow[key]); 
    } else if (key === '8') {
      setSeatRowDeparture8(selectedSeatsByRow[key]); 
    } else if (key === '9') {
      setSeatRowDeparture9(selectedSeatsByRow[key]); 
    } else if (key === '10') {
      setSeatRowDeparture10(selectedSeatsByRow[key]); 
    }
   });
 
  }, [selectedSeatsByRow]);  


  useEffect(() => {
    sessionStorage.setItem('seatRowDeparture1', JSON.stringify(seatRowDeparture1));
    }, [seatRowDeparture1]);
  
  useEffect(() => {
    sessionStorage.setItem('seatRowDeparture2', JSON.stringify(seatRowDeparture2));
  }, [seatRowDeparture2]);

  useEffect(() => {
    sessionStorage.setItem('seatRowDeparture3', JSON.stringify(seatRowDeparture3));
  }, [seatRowDeparture3]);
  useEffect(() => {
    sessionStorage.setItem('seatRowDeparture4', JSON.stringify(seatRowDeparture4));
  }, [seatRowDeparture4]);
  useEffect(() => {
    sessionStorage.setItem('seatRowDeparture5', JSON.stringify(seatRowDeparture5));
  }, [seatRowDeparture5]);
  useEffect(() => {
    sessionStorage.setItem('seatRowDeparture6', JSON.stringify(seatRowDeparture6));
  }, [seatRowDeparture6]);
  useEffect(() => {
    sessionStorage.setItem('seatRowDeparture7', JSON.stringify(seatRowDeparture7));
  }, [seatRowDeparture7]);
  useEffect(() => {
    sessionStorage.setItem('seatRowDeparture8', JSON.stringify(seatRowDeparture8));
  }, [seatRowDeparture8]);
  useEffect(() => {
    sessionStorage.setItem('seatRowDeparture9', JSON.stringify(seatRowDeparture9));
  }, [seatRowDeparture9]);
  useEffect(() => {
    sessionStorage.setItem('seatRowDeparture10', JSON.stringify(seatRowDeparture10));
  }, [seatRowDeparture10]);

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

export default RowSeatsDeparture;
