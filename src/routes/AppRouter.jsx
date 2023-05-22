import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import App from "../components/app/App";
import NotFound from '../components/notfound/NotFound';
import MainSeats from '../components/mainSeats/MainSeats';
import { Payment } from '@mui/icons-material';
import Flight from '../components/flight/Flight';
import FlightDetails from '../components/flightDetails/FlightDetails';

const AppRouter = () => {
    
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} exact element={<Layout />}>
          <Route index element={<App/>} />
          <Route path={"flight"} element={<Flight />} />
          <Route path={"seats"} element={<MainSeats />} />
          <Route path={"payment"} element={<Payment />} />
          <Route path={"flightdetails"} element={<FlightDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default AppRouter