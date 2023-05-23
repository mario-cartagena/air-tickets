import React from 'react';
import './styleFooter.scss';
import githubImage from '../../../src/assets/img/icons/icons8-github-24.png'
import linkedinImage from '../../../src/assets/img/icons/icons8-linkedin-24.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <h4>Hecho por 👨‍💻 Jhon Mario Cartagena  &  Maria Antonieta Pereira 👩‍💻</h4>
      <div className='footer__social'>
        <a href="https://github.com/mario-cartagena">
          <img src={githubImage} alt="GitHub Logo" /> 
        </a>
        <a href="https://www.linkedin.com/in/mariocartagena/">
          <img src={linkedinImage} alt="LinkedIn Logo" /> 
        </a>
        <a href="https://github.com/Marianto38">
          <img src={githubImage} alt="GitHub Logo"/>
        </a>
        <a href="https://www.linkedin.com/in/mariaantonietapereira/">
          <img src={linkedinImage} alt="LinkedIn Logo" /> 
        </a>
      </div>
    </footer>
  )
}

export default Footer