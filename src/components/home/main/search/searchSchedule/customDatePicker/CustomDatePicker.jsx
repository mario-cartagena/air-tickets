// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import dayjs from 'dayjs';
// import 'dayjs/locale/es'; // Importa el idioma español de Day.js

// dayjs.locale('es'); // Configura el idioma español en Day.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import es from 'date-fns/locale/es'; // Importa el idioma español de date-fns



// const CustomDatePicker = () => {
//     const [startDate, setStartDate] = useState(null);
//     const [endDate, setEndDate] = useState(null);
  
//     const handleStartDateChange = (date) => {
//       setStartDate(date);
//     };
  
//     const handleEndDateChange = (date) => {
//       setEndDate(date);
//     };
  
//     const formatDate = (date) => {
//       return dayjs(date).format('ddd DD MMM, YYYY'); // Formato: Mar 07 may, 2023
//     };
  
//     return (
//       <div>
//         <DatePicker
//           selected={startDate}
//           onChange={handleStartDateChange}
//           dateFormat='ddd DD MMM, YYYY'
//           placeholderText="Salida"
//           className="custom-datepicker-input"
//           // Aquí puedes agregar otras propiedades y configuraciones según tus necesidades
//         />
//         <DatePicker
//           selected={endDate}
//           onChange={handleEndDateChange}
//           dateFormat='ddd DD MMM, YYYY'
//           placeholderText="Regreso"
//           className="custom-datepicker-input"
//           // Aquí puedes agregar otras propiedades y configuraciones según tus necesidades
//         />
//         {startDate && endDate && (
//           <p>
//             Salida: {formatDate(startDate)} - Regreso: {formatDate(endDate)}
//           </p>
//         )}
//       </div>
//     );
//   };}


const CustomDatePicker = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
  
    const handleStartDateChange = (date) => {
      setStartDate(date);
    };
  
    const handleEndDateChange = (date) => {
      setEndDate(date);
    };
  
    const formatDate = (date) => {
      return format(date, 'eee dd MMM, yyyy', { locale: es }); // Formato: Mar 07 may, 2023
    };
  
    return (
      <div>
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          dateFormat="eee dd MMM, yyyy"
          placeholderText="Salida"
          className="custom-datepicker-input"
          // Aquí puedes agregar otras propiedades y configuraciones según tus necesidades
        />
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          dateFormat="eee dd MMM, yyyy"
          placeholderText="Regreso"
          className="custom-datepicker-input"
          // Aquí puedes agregar otras propiedades y configuraciones según tus necesidades
        />
        {startDate && endDate && (
          <p>
            Salida: {formatDate(startDate)} - Regreso: {formatDate(endDate)}
          </p>
        )}
      </div>
    );
  };
  
  
  export default CustomDatePicker