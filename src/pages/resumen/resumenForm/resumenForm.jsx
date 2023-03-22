/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';

function ResumenForm() {
  const opciones = useSelector((state) => state.opciones);
  return (
    <Box
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="filled-read-only-input1"
          label="Pais"
          value={opciones[0].Pais}
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-read-only-input2"
          label="Operadora"
          defaultValue="Movistar"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
      </div>
      <div>
        <TextField
          id="filled-read-only-input3"
          label="Marca"
          defaultValue="Samsumg"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-read-only-input4"
          label="Modelo"
          defaultValue="Note 10"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
      </div>
      <div>
        <TextField
          id="filled-read-only-input5"
          label="Tiempo Minimo de Desbloqueo"
          defaultValue="1 dia"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-read-only-input6"
          label="Tiempo Maximo de Desbloqueo"
          defaultValue="6 dias"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
      </div>
      <div>
        <TextField
          id="filled-read-only-input7"
          label="IMEI"
          defaultValue="2121545479852144535462324"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-read-only-input8"
          label="E-Mail"
          defaultValue="rlunar@mercadeoracional.com"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
      </div>
      <div>
        <TextField
          label="Custom"
          defaultValue="Prueba"
          variant="filled"
          InputProps={{
            readOnly: true,
          }}
          color="warning"
          focused
        />
        <TextField
          label="Monto a Pagar"
          defaultValue="$ 15.00"
          variant="filled"
          InputProps={{
            readOnly: true,
          }}
          color="warning"
          focused
        />
      </div>
    </Box>
  );
}

export default ResumenForm;
