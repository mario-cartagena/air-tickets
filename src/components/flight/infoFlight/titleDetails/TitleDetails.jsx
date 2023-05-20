import React from 'react';
import './styleTitleDetails.scss'

const TitleDetails = () => {
  return (
    <div className='flight__details'>
        <h1>Vuelo de salida</h1>
        <div className='details'>
          <h4>Martes 30 nov 2021</h4>
          <span>Cd. Mex (AICM) a Culiacán</span>
        </div>
    </div>
  )
}

export default TitleDetails