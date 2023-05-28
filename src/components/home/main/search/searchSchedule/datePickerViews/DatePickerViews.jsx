// import * as React from 'react';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// export default function DatePickerViews() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']}>
//         <DatePicker
//           label={'"year", "month" and "day"'}
//           views={['year', 'month', 'day']}
//         />
//         {/* <DatePicker label={'"day"'} views={['day']} /> */}
//         {/* <DatePicker label={'"month" and "year"'} views={['month', 'year']} /> */}
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }

// import  React, { useEffect } from 'react';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { formatDateShort } from '../../../../../../utils/helpers';
// import { AppContext } from '../appContext/AppContext';

import React, { useContext } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AppContext } from '../appContext/AppContext';

// Rest of the code...


export default function DatePickerViews() {
  const {selectedDateSimple, setSelectedDateSimple} = useContext(AppContext);

  const handleDateChange = (date) => {
    setSelectedDateSimple(date);
  };

  console.log(selectedDateSimple)

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']}>
        <DatePicker
          label={'Salida'}
          views={['year', 'month', 'day']}
          value={selectedDateSimple}
          onChange={handleDateChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
