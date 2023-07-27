/* eslint-disable react/prop-types */
import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setOpcionesGlobal } from '../../../store/slices/opciones.slice';

function Input({ Next }) {
  const [valueOptions, setValueOptions] = useState('');
  const [valueOptionsEmail, setValueOptionsEmail] = useState('');
  const dispatch = useDispatch();

  const handleChangeImei = (event) => {
    setValueOptions(event.target.value);
    dispatch(setOpcionesGlobal({ id: '5', imei: event.target.value }));
  };
  const handleChangeEmail = (event) => {
    setValueOptionsEmail(event.target.value);
    dispatch(setOpcionesGlobal({ id: '6', email: event.target.value }));
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
      <TextField id="imei" label="IMEI" variant="filled" onChange={handleChangeImei} defaultValue={valueOptions} />
      <TextField id="email" label="Correo electronico" variant="filled" onChange={handleChangeEmail} defaultValue={valueOptionsEmail} />
      <Box sx={{ display: 'flex', gap: '30px' }}>
        <Button variant="contained" onClick={() => Next(3)}> Volver</Button>
        <Button variant="contained" onClick={() => Next(5)}> Siguiente </Button>
      </Box>
    </Box>
  );
}

export default Input;
