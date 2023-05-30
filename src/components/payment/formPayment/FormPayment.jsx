import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from "yup";

const FormPayment = () => {

    let initialValues = {
      numeroTarjeta: "",
      nombres: "",
      fechaExpiracion: "",
      codigoCVV: "",
    }
  
    const sendForm = (data) => {
      console.log(data)
    }
  
    const {handleSubmit, handleChange, values, errors} = useFormik({
      initialValues: initialValues,
      validationSchema: Yup.object({
        numeroTarjeta: Yup.string()
        .matches(/^(?:3[47]\d{13}|4(?:\d{12}|\d{15})|(?:5[1-5]\d{14}|6011\d{12}))$/, 'El número de tarjeta debe contener solo números')
        .min(13, 'El número de tarjeta debe tener al menos 13 números')
        .max(16, 'El número de tarjeta no debe tener más de 16 números')
        .required('El número de tarjeta es obligatorio'),
        nombres: Yup.string().matches(/^[a-zA-Z]+\s[a-zA-Z]+$/, 'El nombre del pasajero debe contener solo letras')
        .min(5, 'El nombre del pasajero debe tener al menos 3 caracteres.')
        .max(20, 'El nombre del pasajero no debe tener más de 15 caracteres.')
        .required('El nombre del pasajero es obligatorio.'),
        fechaExpiracion:  Yup.string().required("La fecha es obligatoria."),
        codigoCVV: Yup.string()
        .matches(/^[0-9]+$/, 'El código CVV debe contener solo números')
        .min(3, 'El código CVV debe tener al menos 3 digitos')
        .max(4, 'El código CVV no debe tener más de 4 digitos')
        .required('El código CVV es obligatorio')
      }),
      onSubmit: sendForm,
  
    });
  
    return (
      <form onSubmit={handleSubmit} className='form'>
        <TextField
          label="Número de tarjeta"
          name="numeroTarjeta"
          onChange={handleChange}
          value={values.numeroTarjeta}
          error={errors.numeroTarjeta}
          helperText={errors.numeroTarjeta}
        />
        <TextField
          label="Nombre y Apellido"
          name="nombres"
          onChange={handleChange}
          value={values.nombres}
          error={errors.nombres}
          helperText={errors.nombres}
        />
        <TextField
          label="Fecha de expiración"
          type="date"
          name="fechaExpiracion"
          onChange={handleChange}
          value={values.fechaExpiracion}
          error={errors.fechaExpiracion}
          helperText={errors.fechaExpiracion}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Código CVV"
          name="codigoCVV"
          onChange={handleChange}
          value={values.codigoCVV}
          error={errors.codigoCVV}
          helperText={errors.codigoCVV}
          InputLabelProps={{ shrink: true }}
        />
        <Button type="submit" variant="contained" style={{ backgroundColor: '#A12985', color: '#fff' }}>
          Agregar
        </Button>
      </form>
    );
}

export default FormPayment