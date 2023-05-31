import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import './stylesRangeValidation.scss'
import { AppContext } from './appContext/AppContext';
const today = dayjs();

export default function DateRangeValidationShouldDisableDate() {
  // const [selectedDate, setSelectedDate] = React.useState([null, null]);
  const { selectedDate, setSelectedDate } = React.useContext(AppContext);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Función para formatear la fecha en el formato deseado
  const formatDate = (date) => {
    if (!date) return ''; // Manejo de fecha nula

    return dayjs(date.$d).format('ddd DD MMM, YYYY'); // Formato: Mar 07 may, 2023
  };

  React.useEffect(() => {
    // console.log('Selected Dates:');
    if (selectedDate) {
      for (const date of selectedDate) {
        if (date && date.$d) {
          console.log(`${date.$y}-${date.$M + 1}-${date.$D}`);
          console.log(date.$d);
          console.log(formatDate(date));
        }
      }
    }
  }, [selectedDate]);

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateRangePicker
          defaultValue={[today, today]}
          shouldDisableDate={(date, position) => {
            return date.isBefore(today, 'day');
          }}
          onChange={handleDateChange}
          renderDay={(day, _selectedDate, _DayComponentProps) => (
            <div style={{ position: 'relative' }}>
              <span>{dayjs(day).date()}</span>
              <span style={{ position: 'absolute', bottom: 0, right: 0 }}>
                Texto adicional
              </span>
            </div>
          )}
          localeText={{ start: 'Salida', end: 'Regreso' }}
        />
      </LocalizationProvider>
    </div>
  );
}
