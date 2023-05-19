import React from 'react'
import axios from 'axios';
import MainPayMethods from './mainPayMethods/MainPayMethods';
import MainServices from '../mainServices/MainServices';
import Search from '../search/Search';

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

  console.log(quantitySelectedAdult+1);
  return (
    <main>
      <Search/>
      <MainPayMethods/>
      <MainServices />
    </main>
  )
}

export default Main
