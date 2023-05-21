import React from 'react';
import './styleFooter.scss';
import githubImage from '../../../src/assets/img/icons/icons8-github-24.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <h4>Hecho por 👨‍💻 Jhon Mario Cartagena  &  Maria Antonieta Pereira 👩‍💻</h4>
      <div>
        <a href="https://github.com/mario-cartagena">
          <img src={githubImage} alt="GitHub Logo" /> Jhon Mario Cartagena
        </a>
        <a href="https://github.com/Marianto38">
          <img src={githubImage} alt="GitHub Logo"/> Maria Antonieta Pereira
        </a>
      </div>
    </footer>
  )
}

export default Footer