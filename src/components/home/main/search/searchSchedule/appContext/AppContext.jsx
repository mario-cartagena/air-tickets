import React, { useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState([null, null]);
  const [filteredData, setFilteredData] = useState(null);
  const [filteredDates] = useState('')
  const [selectedDateSimple, setSelectedDateSimple] = useState(null);
  const [departureInfoBaggage, setDepartureInfoBaggage] = useState({});
  const [arrivalInfoBaggage, setArrivalInfoBaggage] = useState({});
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
      setArrivalInfoBaggage
    }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
