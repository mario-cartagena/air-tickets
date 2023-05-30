import React, { useContext, useEffect, useState } from 'react';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import DatePickerViews from '../../home/main/search/searchSchedule/datePickerViews/DatePickerViews';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { AppContext } from '../../home/main/search/searchSchedule/appContext/AppContext';


const genders = [
    { value: 'male', label: 'Masculino' },
    { value: 'female', label: 'Femenino' },
    { value: 'other', label: 'Otro' },
];

const nationalityOptions = [
    { value: 'colombia', label: 'Colombia' },
    { value: 'usa', label: 'Estados Unidos' },
    { value: 'canada', label: 'Canadá' },
    { value: 'uk', label: 'Reino Unido' },
  ];
  
  const documentTypes = [
    { value: 'CC', label: 'Cédula de Ciudadanía' },
    { value: 'TI', label: 'Tarjeta de Identidad' },
    { value: 'PASSPORT', label: 'Pasaporte' },
  ];

const FormPassenger = () => {
  const {  passengers, setPassengers  } = useContext(AppContext);
 
  useEffect(() => {
    sessionStorage.setItem('passengerInfoBooking', JSON.stringify(passengers));
  }, [passengers]);

  let initialValues = {
    nombre: "",
    apellido: "",
    fechaNacimiento: "",
    genero: "",
    nacionalidad: "",
    tipoDocumento: "",
    numeroDocumento: "",
    email: ""
  }

  const sendForm = (data) => {
    console.log(data)
    setPassengers((prev) => [...prev, data]);
  }

  const {handleSubmit, handleChange, values, errors} = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      nombre: Yup.string().matches(/^[a-zA-Z\s']+$/, 'El nombre del pasajero debe contener solo letras')
      .min(3, 'El nombre del pasajero debe tener al menos 3 caracteres.')
      .max(15, 'El nombre del pasajero no debe tener más de 15 caracteres.')
      .required('El nombre del pasajero es obligatorio.'),
      apellido: Yup.string().matches(/^[a-zA-Z\s']+$/, 'El apellido del pasajero debe contener solo letras')
      .min(5, 'El apellido del pasajero debe tener al menos 3 caracteres.')
      .max(15, 'El apellido del pasajero no debe tener más de 15 caracteres.')
      .required('El apellido del pasajero es obligatorio.'),
      fechaNacimiento:  Yup.string().required("La fecha es obligatoria."),
      genero: Yup.string().required("Debes seleccionar un género."),
      nacionalidad: Yup.string().required("Debes seleccionar una nacionalidad."),
      tipoDocumento: Yup.string().required("Debes seleccionar un tipo de documento."),
      numeroDocumento: Yup.string()
      .matches(/^[0-9]+$/, 'El número de documento debe contener solo números')
      .min(10, 'El número de documento debe tener al menos 10 caracteres')
      .max(10, 'El número de documento no debe tener más de 10 caracteres')
      .required('El número de documento es obligatorio'),
      email: Yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'El correo debe ser en formato: correo@dominio.com')
      .email('El correo debe ser válido')
      .required('El correo es obligatorio'),
    }),
    onSubmit: sendForm,
  });

  return (
    <form onSubmit={handleSubmit} className='form'>
      <Typography variant='span'>Información de Contacto</Typography>
      <TextField
        label="Nombre"
        name="nombre"
        onChange={handleChange}
        value={values.nombre}
        error={errors.nombre}
        helperText={errors.nombre}
      />
      <TextField
        label="Apellido"
        name="apellido"
        onChange={handleChange}
        value={values.apellido}
        error={errors.apellido}
        helperText={errors.apellido}
      />
      <TextField
        label="Fecha de nacimiento"
        type="date"
        name="fechaNacimiento"
        onChange={handleChange}
        value={values.fechaNacimiento}
        error={errors.fechaNacimiento}
        helperText={errors.fechaNacimiento}
        InputLabelProps={{ shrink: true }}
      />
      <FormControl >
        <InputLabel>Género</InputLabel>
        <Select name="genero"
        onChange={handleChange}
        value={values.genero}
        error={errors.genero}
        helperText={errors.genero}
        >
          {genders.map((gender) => (
            <MenuItem key={gender.value} value={gender.value}>
              {gender.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth >
        <InputLabel>Nacionalidad</InputLabel>
        <Select name="nacionalidad"
        onChange={handleChange}
        value={values.nacionalidad}
        error={errors.nacionalidad}
        helperText={errors.nacionalidad}
        >
          {nationalityOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth >
        <InputLabel>Tipo de documento</InputLabel>
        <Select  name="tipoDocumento"
        onChange={handleChange}
        value={values.tipoDocumento}
        error={errors.tipoDocumento}
        helperText={errors.tipoDocumento}
        >
          {documentTypes.map((type) => (
            <MenuItem key={type.value} value={type.value}>
              {type.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Número de documento"
        name="numeroDocumento"
        onChange={handleChange}
        value={values.numeroDocumento}
        error={errors.numeroDocumento}
        helperText={errors.numeroDocumento}
      />
      <TextField
        label="Email"
        type="email"
        name="email"
        onChange={handleChange}
        value={values.email}
        error={errors.email}
        helperText={errors.email}
      />
      <Button type="submit" variant="contained" color="primary">
        Guardar
      </Button>
    </form>
  )
}

export default FormPassenger