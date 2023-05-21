import React from 'react'
import TitleDetails from './titleDetails/TitleDetails'
import ItemFlight from './itemFlight/ItemFlight'
import ButtonEditFlight from '../buttonEdtiFlight/ButtonEditFlight'

const InfoFlight = () => {
  return (
    <div>  
        <TitleDetails/>
        <ButtonEditFlight/>
        <p>Selección de horarios y equipajes</p>
        <ItemFlight/>
    </div>
  )
}

export default InfoFlight