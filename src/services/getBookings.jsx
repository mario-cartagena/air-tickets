import axios from "axios";
//const URL = "https://tickets-backend.herokuapp.com/";
const URL = "https://ticketsbackend.onrender.com/";

const endpointFlights = "booking";

export const getBooking = async () => {
    try {

        const { data } = await axios.get(`${URL}${endpointFlights}`);
        return data;
        
    } catch (error) {
        console.log(error);
        return [];
    }
}

//getBooking()
