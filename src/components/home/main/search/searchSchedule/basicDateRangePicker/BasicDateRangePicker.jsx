import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import './styleBasicDateRangePicker.scss'
import { styled } from '@mui/system';
import dayjs from 'dayjs';
import 'dayjs/locale/es'; // Importa el idioma español de Day.js

dayjs.locale('es'); // Configura el idioma español en Day.js

const InputRoot = styled('div')({
  // Estilos para el campo de entrada (input) raíz
  // Puedes agregar aquí tus estilos personalizados
});

const Input = styled('input')({
  // Estilos para el campo de entrada (input)
  // Puedes agregar aquí tus estilos personalizados
});

export default function BasicDateRangePicker() {

  const [selectedDate, setSelectedDate] = React.useState([null, null]);

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
          console.log(`${date.$y}-${date.$M + 1}-${date.$D}`)
          console.log(date.$d)
          console.log(formatDate(date))
        }
      }
    }
  }, [selectedDate]);

  console.log(selectedDate)

  return (
    //   <LocalizationProvider dateAdapter={AdapterDayjs}>
    //   <DemoContainer components={['DateRangePicker']}>
    //     <DateRangePicker
    //       value={selectedDate}
    //       onChange={handleDateChange}
    //       renderInput={(startProps, endProps) => {
    //         const formattedStartValue = formatDate(startProps.inputProps.value);
    //         const formattedEndValue = formatDate(endProps.inputProps.value);

    //         return (
    //           <InputRoot>
    //             <Input
    //               {...startProps.inputProps}
    //               value={formattedStartValue}
    //               placeholder={formattedStartValue}
    //             />
    //             <Input
    //               {...endProps.inputProps}
    //               value={formattedEndValue}
    //               placeholder={formattedEndValue}
    //             />
    //           </InputRoot>
    //         );
    //       }}
    //       localeText={{ start: 'Salida', end: 'Regreso' }}
    //     />
    //   </DemoContainer>
    // </LocalizationProvider>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangePicker']}>
        <DateRangePicker
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={({ inputProps }) => {
            const formattedValue = formatDate(inputProps.value);
            const formattedPlaceholder = formatDate(inputProps.placeholder);
            console.log(inputProps)
            return (
              <InputRoot>
                <Input
                  {...inputProps}
                  value={formattedValue}
                  placeholder={formattedPlaceholder}
                  dateFormat='ddd DD MMM, YYYY'
                  format="LL"
                />
              </InputRoot>
            );
          }}
          localeText={{ start: 'Salida', end: 'Regreso' }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
