/* eslint-disable react/prop-types */
import { Box, Button, TextField } from '@mui/material';
import React from 'react';

function Input({ setFormImei, formImei, Next }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
      <TextField id="imei" label="IMEI" variant="filled" />
      <TextField id="email" label="Correo electronico" variant="filled" />
      <Box sx={{ display: 'flex', gap: '30px' }}>
        <Button variant="contained" onClick={() => Next(3)}> Volver</Button>
        <Button variant="contained" onClick={() => setFormImei(!formImei)} type="button"> Siguiente </Button>
      </Box>
    </Box>
  );
}

export default Input;
