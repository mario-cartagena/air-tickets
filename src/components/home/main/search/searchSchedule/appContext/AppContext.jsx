import React from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = React.useState([null, null]);

  return (
    <AppContext.Provider value={{ selectedDate, setSelectedDate }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
