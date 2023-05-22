import React, { useEffect, useState } from "react";
import './stylesBoardingWeb.scss'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import logo from '../../assets/img/logoVoladores1.png'

const VistaWeb = () => {
  const { width, height } = useWindowSize()
  const [isConfettiActive, setIsConfettiActive] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsConfettiActive(false);
    }, 5000); // 30 segundos

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (

    <div>

      {isConfettiActive && (
        <Confetti width={width} height={height} />
      )}
      <section>
        <div className="notice__booking">
          <h3>!Felicidades! </h3>
          <div>
            <h3>!Reserva realizada con éxito!</h3>
          </div>
        </div>
      </section>

      <div className="ticket__booking">
        <div class="box">
          <ul class="left">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <ul class="right">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div class="ticket">
            <img src={logo} alt="" style={{ width: '70px', marginLeft: '.5rem' }} />
            {/* <span class="airline">Lufthansa</span> */}

            <span class="airline airlineslip">  <img src={logo} alt="" style={{ width: '70px', marginLeft: '.5rem' }} /></span>
            <span class="boarding">Boarding pass</span>
            <div class="content">
              <span class="jfk">MDE</span>
              <span class="plane"><svg clip-rule="evenodd" fill-rule="evenodd" height="60" width="60" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><g stroke="#222"><line fill="none" stroke-linecap="round" stroke-width="30" x1="300" x2="55" y1="390" y2="390" /><path d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z" fill="#222" stroke-linejoin="round" stroke-width="10" /></g></svg></span>
              <span class="sfo">BGT</span>

              <span class="jfk jfkslip">MDE</span>
              <span class="plane planeslip"><svg clip-rule="evenodd" fill-rule="evenodd" height="50" width="50" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><g stroke="#222"><line fill="none" stroke-linecap="round" stroke-width="30" x1="300" x2="55" y1="390" y2="390" /><path d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z" fill="#222" stroke-linejoin="round" stroke-width="10" /></g></svg></span>
              <span class="sfo sfoslip">BGT</span>
              <div class="sub-content">
                <span class="watermark">VOLADORES</span>
                <span class="name">Nombre de Pasajero<br /><span>Maria Pereira</span></span>
                <span class="flight">Vuelo N&deg;<br /><span>00ABC</span></span>
                <span class="gate">GATE<br /><span>11B</span></span>
                <span class="seat">Asiento<br /><span>45A</span></span>
                <span class="boardingtime">Hora de abordaje<br /><span>8:25PM ON AUGUST 2023</span></span>

                <span class="flight flightslip">Vuelo N&deg;<br /><span>00ABC</span></span>
                <span class="seat seatslip">Asiento<br /><span>45A</span></span>
                <span class="name nameslip">Nombre de Pasajero<br /><span>Maria Pereira</span></span>
              </div>
            </div>
            <div class="barcode"></div>
            <div class="barcode slip"></div>
          </div>
        </div>

      </div>


    </div>
  );
};

export default VistaWeb;