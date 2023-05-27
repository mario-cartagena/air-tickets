import React, { useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [selectedDate, setSelectedDate, filteredData, setFilteredData] = useState([null, null]);
  const [ filteredDates] = useState('')



  return (
    <AppContext.Provider value={{ selectedDate, setSelectedDate, filteredData, setFilteredData, filteredDates }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
