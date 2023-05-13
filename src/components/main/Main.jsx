import React from 'react'
import axios from 'axios';
const URL = "https://tickets-backend.herokuapp.com/flights";
const Main = () => {
  const getFlights = async() => {
    try {
      const {data} = await axios.get(URL);
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }
  getFlights();
  return (
    <div>Main</div>
  )
}

export default Main