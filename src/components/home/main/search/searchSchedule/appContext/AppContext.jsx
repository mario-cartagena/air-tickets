import React, { useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [selectedDate, setSelectedDate, filteredData, setFilteredData] = useState([null, null]);
  const [ filteredDates] = useState('')
  const [selectedDateSimple, setSelectedDateSimple] = React.useState(null);

  return (
    <AppContext.Provider value={{ selectedDate, setSelectedDate, filteredData, setFilteredData, filteredDates, selectedDateSimple, setSelectedDateSimple }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
