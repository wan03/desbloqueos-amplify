/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';

function ResumenForm() {
  const opciones = useSelector((state) => state.opciones);
  // eslint-disable-next-line no-console
  console.log(opciones);
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
          value={opciones[1]['Compañia telefonica']}
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
          value={opciones[2]?.Marca}
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-read-only-input4"
          label="Modelo"
          value={opciones[3]?.Modelo}
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
          value={opciones[5]?.timeMin}
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-read-only-input6"
          label="Tiempo Maximo de Desbloqueo"
          value={opciones[6]?.timeMax}
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
          value={opciones[8]?.imei}
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-read-only-input8"
          label="E-Mail"
          value={opciones[9]?.email}
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
      </div>
      <div>
        <TextField
          label="Promedio"
          value={opciones[7]?.avg}
          variant="filled"
          InputProps={{
            readOnly: true,
          }}
          color="warning"
          focused
        />
        <TextField
          label="Monto a Pagar $"
          value={opciones[4]?.price}
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
