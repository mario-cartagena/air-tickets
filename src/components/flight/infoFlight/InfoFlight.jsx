import React from 'react'
import './styleInfoFlight.scss'
import TitleDetails from './titleDetails/TitleDetails'
import ItemFlight from './itemFlight/ItemFlight'
import ButtonEditFlight from '../buttonEdtiFlight/ButtonEditFlight'

const InfoFlight = () => {
  return (
    <div className='info'>  
        <div className='info__header'>
          <TitleDetails/>
          <ButtonEditFlight/>
        </div>
        <div className='info__packages'>
          <p className='info__title'>Selección de horarios y equipajes</p>
          <ItemFlight/>
        </div>
    </div>
  )
}

export default InfoFlight