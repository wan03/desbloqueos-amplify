/* eslint-disable react/prop-types */
import {
  Box, IconButton, TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { setOpcionesGlobal } from '../../../store/slices/opciones.slice';

function Input({ Next }) {
  const [valueOptions, setValueOptions] = useState('');
  const [valueOptionsEmail, setValueOptionsEmail] = useState('');
  const dispatch = useDispatch();
  const opciones = useSelector((state) => state.opciones);

  const handleChangeImei = (event) => {
    setValueOptions(event.target.value);
    dispatch(setOpcionesGlobal({ id: '5', imei: event.target.value }));
  };
  const handleChangeEmail = (event) => {
    setValueOptionsEmail(event.target.value);
    dispatch(setOpcionesGlobal({ id: '6', email: event.target.value }));
  };

  const disabledImei = opciones[9] && opciones[10] ? undefined : 'disabled';
  return (
    <Box sx={{
      display: 'flex', flexDirection: 'column', gap: '50px', backgroundColor: '#2586AF', padding: '20px', borderRadius: '15px',
    }}
    >
      <TextField sx={{ backgroundColor: 'white' }} color="secondary" id="imei" label="IMEI" variant="filled" onChange={handleChangeImei} defaultValue={valueOptions} />
      <TextField sx={{ backgroundColor: 'white' }} color="secondary" id="email" label="Correo electronico" variant="filled" onChange={handleChangeEmail} defaultValue={valueOptionsEmail} />
      <Box sx={{
        display: 'flex', gap: '30px', justifyContent: 'center', width: '100%',
      }}
      >
        <IconButton onClick={() => Next(3)}>
          <ArrowBackIcon color="secondary" fontSize="large" />
        </IconButton>
        <IconButton disabled={disabledImei} onClick={() => Next(5)}>
          <ArrowForwardIcon color="secondary" fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Input;
