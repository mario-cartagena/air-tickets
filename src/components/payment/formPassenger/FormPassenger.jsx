import React, { useContext, useEffect, useState } from 'react';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select, Typography } from '@mui/material';
import { AppContext } from '../../home/main/search/searchSchedule/appContext/AppContext';

const genders = [
    { value: 'male', label: 'Masculino' },
    { value: 'female', label: 'Femenino' },
    { value: 'other', label: 'Otro' },
];

const nationalityOptions = [
    { value: 'usa', label: 'Estados Unidos' },
    { value: 'canada', label: 'Canadá' },
    { value: 'uk', label: 'Reino Unido' },
    // Otras opciones de nacionalidad
  ];
  
  const documentTypes = [
    { value: 'CC', label: 'Cédula de Ciudadanía' },
    { value: 'TI', label: 'Tarjeta de Identidad' },
    { value: 'PASSPORT', label: 'Pasaporte' },
    // Otros tipos de documento
  ];

const FormPassenger = ({key}) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [genero, setGenero] = useState('');
    const [nacionalidad, setNacionalidad] = useState('');
    const [tipoDocumento, setTipoDocumento] = useState('');
    const [numeroDocumento, setNumeroDocumento] = useState('');
    const [email, setEmail] = useState('');
    const {  passengers, setPassengers  } = useContext(AppContext);
 
    useEffect(() => {
      sessionStorage.setItem('passengerInfoBooking', JSON.stringify(passengers));
    }, [passengers]);
    
    const asingPassanger = (e) => {
      e.preventDefault();
     
      const passengerInfoBooking = {
        nombre,
        apellido,
        fechaNacimiento,
        genero,
        nacionalidad,
        tipoDocumento,
        numeroDocumento,
        email,
      };
    
      setPassengers((prev) => [...prev, passengerInfoBooking]);

    };
    
    console.log(passengers);

    
  return (
    <form  className='form' key={key}>
      <Typography variant='span'>Información de Contacto</Typography>
      <TextField
        label="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <TextField
        label="Apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
        required
      />
      <TextField
        label="Fecha de nacimiento"
        type="date"
        value={fechaNacimiento}
        onChange={(e) => setFechaNacimiento(e.target.value)}
        required
        InputLabelProps={{ shrink: true }}
      />
      <FormControl  required>
        <InputLabel>Género</InputLabel>
        <Select value={genero} onChange={(e) => setGenero(e.target.value)}>
          {genders.map((gender) => (
            <MenuItem key={gender.value} value={gender.value}>
              {gender.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth required>
        <InputLabel>Nacionalidad</InputLabel>
        <Select value={nacionalidad} onChange={(e) => setNacionalidad(e.target.value)}>
          {nationalityOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth required>
        <InputLabel>Tipo de documento</InputLabel>
        <Select value={tipoDocumento} onChange={(e) => setTipoDocumento(e.target.value)}>
          {documentTypes.map((type) => (
            <MenuItem key={type.value} value={type.value}>
              {type.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Número de documento"
        value={numeroDocumento}
        onChange={(e) => setNumeroDocumento(e.target.value)}
        required
      />
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button onClick={(e) => asingPassanger(e)} variant="contained" color="primary">
        Guardar
      </Button>
    </form>
  )
}

export default FormPassenger