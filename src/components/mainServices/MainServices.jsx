import React from 'react'
import Card from '../card/Card'
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faY } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import './styleMainService.scss'


function MainServices() {
  const services = [
    {
      id: 1,
      icon: faCar,
      name: "Transporte",
      description: "Renta un auto o reserva un shuttle"
    },
    {
      id: 2,
      icon: faY,
      name: "Vuelos + Hoteles",
      description: "Encuentra las mejores ofertas para tu viaje"
    },
    {
      id: 3,
      icon: faUserGroup,
      name: "Grupos",
      description: "Obten una cotización para grupos mayores de 9 personas"
    },
    {
      id: 4,
      icon: faBed,
      name: "Hoteles",
      description: "Reserva cualquier habitación en cualquier parte del mundo"
    },
    {
      id: 5,
      icon: faBoxOpen,
      name: "Carga",
      description: "Contamos con servicio de carga y mensajeria"
    }
  ]


  return (
    <div className='container__mainServices'>
      {services.map((item) => (
        <Card key={item.id} service={item} />
      ))}


    </div>
  )
}

export default MainServices