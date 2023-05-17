import React, { useState, useEffect } from 'react';
import useAutocomplete from '@mui/base/useAutocomplete';
import { styled } from '@mui/system';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styleSelectAirport.scss'
import { getFlights } from '../../services/getAirports';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Label = styled('label')({
  display: 'block',
});

const Input = styled('input')(({ theme }) => ({
  width: 200,
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#000',
  color: theme.palette.mode === 'light' ? '#000' : '#fff',
}));

const Listbox = styled('ul')(({ theme }) => ({
  width: 320,
  display: 'block',
  margin: 0,
  padding: 0,
  zIndex: 1,
  position: 'absolute',
  listStyle: 'none',
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#000',
  overflowY: 'auto',
  maxHeight: '220px',
  borderRadius: '0px 0px 12px 12px',
  border: '1px solid rgba(0,0,0,.25)',
  top: '155px',
  '& li.Mui-focused': {
    backgroundColor: '#4a8df6',
    color: 'white',
    cursor: 'pointer',
    width: '320px'
  },
  '& li:active': {
    backgroundColor: '#2977f5',
    color: 'white',
  },
  // Estilos para personalizar la barra de desplazamiento
  '&::-webkit-scrollbar': {
    width: '10px',
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#000',
    borderRadius: '12px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#bbb',
    borderRadius: '20px',
    border: `3px solid ${theme.palette.mode === 'light' ? '#fff' : '#000'}`,
  },
}));

export default function UseAutocomplete() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    getFlights()
      .then((response) => {
        if (!flights.length) {
          setFlights(response);
        }
      })
      .catch((error) => console.log(error));
  }, [flights]);

  // useEffect(() => {
  //   flights.forEach((item) => {
  //     console.log(item.departure_airport.name);
  //   });
  // }, [flights]);

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: 'use-autocomplete-demo',
    options: flights.map((item) => ({
      title: item.departure_airport.name,
      code: item.departure_airport.code_iata,
    })),
    getOptionLabel: (option) => option.title,
    isOptionEqualToValue: (option, value) =>
    option.title === value.title && option.code === value.code, // Personaliza la prueba de igualdad
    });

    console.log(getInputProps().value)

    const [isDropdownOpen, setDropdownOpen] = useState(true);

    const handleClose = () => {
      setDropdownOpen(false);
    };
   
  return (
    <div className='main__selectAirport'>
      <div {...getRootProps()}>
      <div className='main__selectAirport__label'> <Label {...getInputLabelProps()} className='main__selectAirport__label'>¿A dónde viajas?</Label>  <span onClick={handleClose}><FontAwesomeIcon icon={faXmark} className='car__icon' /></span></div>
        <div  style={{ width:'320px', padding:'10px', borderRadius:'12px 12px 0px 0px',  border: '1px solid rgba(0,0,0,.25)' }}>
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: 'dark', fontSize: '1rem', marginRight:'.5rem' }}/>
    
        <Input {...getInputProps()} style={{ border:'0px solid', outline: 'none' }} placeholder='Buscar aeropuerto de salida' />
        </div>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })} style={{ display:'flex', justifyContent:'space-between' }}> <div>{option.title}</div> {option.code}</li>
          ))}
        </Listbox>
      ) : null}
    </div>
  );
}