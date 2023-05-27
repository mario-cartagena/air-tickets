import dayjs from "dayjs";

export const formatDate = (date) => {
    if (!date) return ''; // Manejo de fecha nula

    return dayjs(date).format('ddd DD MMM, YYYY'); // Formato: Mar 07 may, 2023
  };
  