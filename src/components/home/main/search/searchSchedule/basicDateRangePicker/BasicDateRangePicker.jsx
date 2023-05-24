import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import './styleBasicDateRangePicker.scss'

// export default function BasicDateRangePicker() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={['DateRangePicker']}>
//         <DateRangePicker localeText={{ start: 'Salida', end: 'Regreso' }} />
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }

export default function BasicDateRangePicker() {
  const [selectedDate, setSelectedDate] = React.useState([null, null]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  console.log(selectedDate)
  for (const i of selectedDate) {
    console.log(i)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangePicker']}>
        <DateRangePicker
          value={selectedDate}
          onChange={handleDateChange}
          localeText={{ start: 'Salida', end: 'Regreso' }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
