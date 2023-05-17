import React from 'react'
import axios from 'axios';
import MainServices from '../mainServices/MainServices';
const URL = "https://tickets-backend.herokuapp.com/flights";
const Main = () => {
  const getFlights = async () => {
    try {
      const { data } = await axios.get(URL);
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }
  getFlights();
  return (
    <>
      <div>Main</div>
      <MainServices />
    </>
  )
}

export default Main