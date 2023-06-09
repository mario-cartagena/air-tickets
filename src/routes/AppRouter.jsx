import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import NotFound from '../components/notfound/NotFound';
import MainSeats from '../pages/MainSeats';
import Flight from '../pages/Flight';
import FlightDetails from '../pages/FlightDetails';
import Payment from '../pages/Payment';
import Home from '../pages/Home';
import { AppProvider } from '../components/home/main/search/searchSchedule/appContext/AppContext';


const AppRouter = () => {

  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path={"/"} exact element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={"flight"} element={<Flight />} />
            <Route path={"seats"} element={<MainSeats />} />
            <Route path={"payment"} element={<Payment />} />
            <Route path={"flightdetails"} element={<FlightDetails />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  )
}

export default AppRouter