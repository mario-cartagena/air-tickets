import dayjs from "dayjs";

export const formatDate = (date) => {
  if (!date) return ""; // Manejo de fecha nula

  return dayjs(date).format("ddd DD MMM, YYYY"); // Formato: Mar 07 may, 2023
};

export const formatDateShort = (date) => {
  if (!date) return ""; // Handle null date

  return dayjs(date).format("YYYY-MM-DD"); // Example output: 2023-08-10
};
