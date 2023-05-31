import React, { useContext, useState } from "react";
import "./styleFlightCost.scss";
import { AppContext } from "../../../home/main/search/searchSchedule/appContext/AppContext";
import ButtonSeats from "../buttonSeats/ButtonSeats";

const FlightCost = () => {
  const storedDataToFilter = sessionStorage.getItem('dataToFilter');
  const parsedDataToFilter = JSON.parse(storedDataToFilter);
  const { departureInfoBaggage, arrivalInfoBaggage} = useContext(AppContext);

  const discount = 15000;
  const ivaServices = 0.19;
  let baseFee = 0;
  let baseFeeDiscount = 0;
  let ivaTotal = 0;
  let totalCost = 0;
  let priceBaggage = 0;
  let totalPassengers = 0;
  if(Object.keys(departureInfoBaggage).length > 0 && Object.keys(arrivalInfoBaggage).length > 0){
        totalPassengers = parsedDataToFilter.countAdult + parsedDataToFilter.countNiños + parsedDataToFilter.countNiños;
        priceBaggage = departureInfoBaggage.baggagePrice + arrivalInfoBaggage.baggagePrice;
        baseFee = (departureInfoBaggage.data[0].price + arrivalInfoBaggage.data[0].price + priceBaggage) * totalPassengers;
        baseFeeDiscount = baseFee - discount;
        ivaTotal = baseFeeDiscount * ivaServices;
        totalCost = baseFeeDiscount + ivaTotal;
    }else if(Object.keys(departureInfoBaggage).length > 0){
        totalPassengers = parsedDataToFilter.countAdult + parsedDataToFilter.countNiños + parsedDataToFilter.countNiños;
        priceBaggage = departureInfoBaggage.baggagePrice;
        baseFee = (departureInfoBaggage.data[0].price + priceBaggage) * totalPassengers;
        baseFeeDiscount = baseFee - discount;
        ivaTotal = baseFeeDiscount * ivaServices;
        totalCost = baseFeeDiscount + ivaTotal;
    }

  const infoBooking = {
    tarifaBase: baseFee,
    descuento: discount,
    tarifaBaseDescuento: baseFeeDiscount,
    ivaTotal: ivaTotal,
    total: totalCost
  }

  sessionStorage.setItem('infoBooking', JSON.stringify(infoBooking));

  return (
    <>
    {Object.keys(departureInfoBaggage).length > 0 ? 
    <div className="cost">
      <p className="cost__title">Costos de vuelo</p>
      <div className="cost__info">
        <div className="cost__fee">
          <p>Tarifa base</p>   
            {Object.keys(arrivalInfoBaggage).length === 0 ? 
            <span>${baseFee} COP</span>
            : <span>${baseFee} COP</span>}
        </div>
        <div className="cost__discount">
          <p>Descuento promocional</p>
          <span>-${discount} COP</span>
        </div>
        <div className="cost__feediscount">
          <p>Tarifa base con descuento</p>
          <span>${baseFeeDiscount} COP</span>
        </div>
        <div className="cost__iva">
          <p>IVA Tarifa (19%)</p>
          <span>${ivaTotal} COP</span>
        </div>
        <div className="cost__total">
          <p>Total</p>
          <span>${totalCost} COP</span>
        </div>
      </div>
    </div>
    : ""}   
    </>
  );
};

export default FlightCost;
