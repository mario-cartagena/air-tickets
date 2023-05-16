import React from 'react'
import axios from 'axios';
import MainPayMethods from './mainPayMethods/MainPayMethods';
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
    <main>
      <MainPayMethods/>
    </main>
  )
}

export default Main