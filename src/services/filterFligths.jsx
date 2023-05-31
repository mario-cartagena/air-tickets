// import axios from 'axios';

// const filterFligths = async () => {
//   try {
//     const response = await axios.get('https://tickets-backend.herokuapp.com/flights', {
//       params: {
//         departureAirport: dataToFilter.selectedDepartureAirport,
//         arrivalAirport: dataToFilter.selectedArrivalAirport,
//         departureDate: dataToFilter.dateDepartureSelected,
//         arrivalDate: dataToFilter.dateArrivalSelected,
//         countAdult: dataToFilter.countAdult,
//         countNiños: dataToFilter.countNiños,
//         couponCode: dataToFilter.couponCode,
//       },
//     });

//     const data = response.data;
//     console.log('Información filtrada:', data);
//     // Aquí puedes hacer lo que necesites con los datos filtrados de la API
//   } catch (error) {
//     console.error('Error al obtener los datos:', error);
//   }
// };

// filterFligths();
