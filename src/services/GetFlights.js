import axios from "axios";
//const URL = "https://tickets-backend.herokuapp.com/";
const URL = "https://ticketsbackend.onrender.com/";

const endpointFlights = "flights";

export const GetFlights = async () => {
    try {

        const { data } = await axios.get(`${URL}${endpointFlights}`);
        return data;
        
    } catch (error) {
        console.log(error);
        return [];
    }
}

//GetFlights()
