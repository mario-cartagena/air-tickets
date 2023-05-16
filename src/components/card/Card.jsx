import React from 'react'
import './styleCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Card = ({ service }) => {
    return (
        <div className='card'>
            <figure className='card__figure'>
                <FontAwesomeIcon icon={service.icon} className='car__icon' />
            </figure>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
        </div>
    )
}

export default Card