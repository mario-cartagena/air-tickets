import React, { useState, useEffect } from 'react';
import useAutocomplete from '@mui/base/useAutocomplete';
import { styled } from '@mui/system';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styleSelectAirport.scss'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { GetFlights } from '../../../../../services/GetFlights';

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
  maxHeight: '200px',
  borderRadius: '0px 0px 8px 8px',
  border: '1px solid rgba(0,0,0,.25)',
  top: '107px',
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


export default function UseAutocomplete({ closeModal, onSelectAirport, itemToSearch }) {

  const [flights, setFlights] = useState([]);

  useEffect(() => {
    GetFlights()
      .then((response) => {
        if (!flights.length) {
          setFlights(response);
        }
      })
      .catch((error) => console.log(error));
  }, [flights]);


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
      title: item[itemToSearch].city,
      code: item[itemToSearch].code_iata,
    })),
    getOptionLabel: (option) => option.title,
    isOptionEqualToValue: (option, value) =>
      option.title === value.title && option.code === value.code, // Personaliza la prueba de igualdad
  });

  console.log(getInputProps().value)

  useEffect(() => {
    onSelectAirport(getInputProps().value);
  }, [getInputProps, onSelectAirport]);


  return (
    <div className='main__selectAirport'>
      <div {...getRootProps()}>
        <div className='main__selectAirport__label'> <Label {...getInputLabelProps()} className='main__selectAirport__label'>¿A dónde viajas?</Label>
          <span onClick={closeModal}>
            <FontAwesomeIcon icon={faXmark} className='car__icon' /></span></div>
        <div className='main__selectAirport__body'>
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: 'dark', fontSize: '1rem', marginRight: '.5rem' }} />
          <Input {...getInputProps()} style={{ border: '0px solid', outline: 'none' }} placeholder='Buscar aeropuerto' />
        </div>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })} className='main__selectAirport__li'>
              <div>{option.title}</div> {option.code}</li>
          ))}
        </Listbox>
      ) : null}
    </div>
  );
}