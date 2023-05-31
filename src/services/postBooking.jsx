import axios from "axios";

const URL = "https://tickets-backend.herokuapp.com/";
const endpointBooking = "booking";

export const postBooking = async (bookingData) => {
  try {
    const { data } = await axios.post(`${URL}${endpointBooking}`, bookingData);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

