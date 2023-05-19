import React from 'react'
import axios from 'axios';
import MainPayMethods from './mainPayMethods/MainPayMethods';
import MainServices from '../mainServices/MainServices';
import Search from '../search/Search';
import BasicDateRangePicker from '../basicDateRangePicker/BasicDateRangePicker';


const URL = "https://tickets-backend.herokuapp.com/flights";
const Main = () => {

  const [quantitySelectedAdult, setQuantitySelectedAdult] = React.useState(0)
  const [quantitySelectedNiños, setQuantitySelectedNiños] = React.useState(0)
  const [quantitySelectedBebes, setQuantitySelectedBebes] = React.useState(0)
 
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
      <BasicDateRangePicker/>
    </main>
  )
}

export default Main
