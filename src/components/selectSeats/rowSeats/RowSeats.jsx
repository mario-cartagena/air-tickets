import React, { useState, useEffect, useCallback, useContext } from 'react';
import './stylesRowSeats.scss';
import { GetFlights } from '../../../services/GetFlights';
import { AppContext } from '../../home/main/search/searchSchedule/appContext/AppContext';

const RowSeats = ({ number, selectedSeatCount, setSelectedSeatCount }) => {
  const [flights, setFlights] = useState([]);
  const [seatStatuses, setSeatStatuses] = useState({});
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedSeatsByRow, setSelectedSeatsByRow] = useState({});
  const { departureInfoBaggage, arrivalInfoBaggage,parsedArrivalInfoBaggage, parsedDepartureInfoBaggage  } = useContext(AppContext);
  // console.log(parsedDepartureInfoBaggage)  
  
  const flighToFilter = parsedArrivalInfoBaggage.flightId
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


  // const seatsInfo = {
  //   seatRow1,
  //   seatRow2,
  //   seatRow3,
  //   seatRow4,
  //   seatRow5,
  //   seatRow6,
  //   seatRow7,
  //   seatRow8,
  //   seatRow9,
  //   seatRow10
  //  }
  //  console.log(seatsInfo)
   
        // setAsientos((prev) => [...prev, seatsInfo]);
        // sessionStorage.setItem('asientos', JSON.stringify(seatsInfo));
  
 

 useEffect(() => {
   console.log('Asientos seleccionados por fila:', selectedSeatsByRow);
   setArrayAsientosSeleccionados(selectedSeatsByRow);
 
   // Verificar la fila seleccionada y realizar acciones específicas
   Object.keys(selectedSeatsByRow).forEach((key) => {
     if (key === '1') {
      setSeatRow1(selectedSeatsByRow[key]);    
     } else if (key === '2') {
       setSeatRow2(selectedSeatsByRow[key]); 
 
      } else if (key === '3') {
       setSeatRow3(selectedSeatsByRow[key]); 
     } else if (key === '4') {
       setSeatRow4(selectedSeatsByRow[key]); 
     } else if (key === '5') {
       setSeatRow5(selectedSeatsByRow[key]); 
     }  else if (key === '6') {
       setSeatRow6(selectedSeatsByRow[key]); 
     } else if (key === '7') {
      setSeatRow7(selectedSeatsByRow[key]); 
    } else if (key === '8') {
      setSeatRow8(selectedSeatsByRow[key]); 
    } else if (key === '9') {
      setSeatRow9(selectedSeatsByRow[key]); 
    } else if (key === '10') {
      setSeatRow10(selectedSeatsByRow[key]); 
    }
   });
 
  }, [selectedSeatsByRow]);  


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
