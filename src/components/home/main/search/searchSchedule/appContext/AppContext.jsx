import React, { useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState([null, null]);
  const [filteredData, setFilteredData] = useState(null);
  const [filteredDates] = useState('')
  const [selectedDateSimple, setSelectedDateSimple] = useState(null);
  const [departureInfoBaggage, setDepartureInfoBaggage] = useState({});
  const [arrivalInfoBaggage, setArrivalInfoBaggage] = useState({});
  const [selectedSeatCount, setSelectedSeatCount] = useState(0);
  const storedDepartureInfoBaggage = sessionStorage.getItem('departureInfoBaggage');
  const parsedDepartureInfoBaggage = JSON.parse(storedDepartureInfoBaggage);
  const storedArrivalInfoBaggage = sessionStorage.getItem('arrivalInfoBaggage');
  const parsedArrivalInfoBaggage = JSON.parse(storedArrivalInfoBaggage);
  const [  passengers, setPassengers] = useState([]);


 
  return (
    <AppContext.Provider value={{
      selectedDate,
      setSelectedDate,
      filteredData, setFilteredData,
      filteredDates, selectedDateSimple,
      setSelectedDateSimple,
      departureInfoBaggage,
      setDepartureInfoBaggage,
      arrivalInfoBaggage,
      setArrivalInfoBaggage,
      parsedDepartureInfoBaggage,
      parsedArrivalInfoBaggage,
      selectedSeatCount,
      setSelectedSeatCount,
      passengers,
      setPassengers
    }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
