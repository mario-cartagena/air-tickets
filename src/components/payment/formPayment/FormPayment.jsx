import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const FormPayment = () => {
    const [numeroTarjeta, setNumeroTarjeta] = useState('');
    const [nombreApellido, setNombreApellido] = useState('');
    const [fechaExpiracion, setFechaExpiracion] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Información agregada:', {
        numeroTarjeta,
        nombreApellido,
        fechaExpiracion,
      });
    };
  
    return (
      <form onSubmit={handleSubmit} className='form'>
        <TextField
          label="Número de tarjeta"
          value={numeroTarjeta}
          onChange={(e) => setNumeroTarjeta(e.target.value)}
          required
        />
        <TextField
          label="Nombre y Apellido"
          value={nombreApellido}
          onChange={(e) => setNombreApellido(e.target.value)}
          required
        />
        <TextField
          label="Fecha de expiración"
          type="date"
          value={fechaExpiracion}
          onChange={(e) => setFechaExpiracion(e.target.value)}
          required
          InputLabelProps={{ shrink: true }}
        />
        <Button type="submit" variant="contained" style={{ backgroundColor: '#A12985', color: '#fff' }}>
          Agregar
        </Button>
      </form>
    );
}

export default FormPayment