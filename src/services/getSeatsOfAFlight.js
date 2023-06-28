import axios from "axios";
const URL = "https://tickets-backend.herokuapp.com/";

const endpointFlights = "flights";

export const getSeatsOfAFlight = async () => {
    try {

        const { data } = await axios.get(`${URL}${endpointFlights}.seats`);
        return data;
        
    } catch (error) {
        console.log(error);
        return [];
    }
}

//getSeatsOfAFlight()
