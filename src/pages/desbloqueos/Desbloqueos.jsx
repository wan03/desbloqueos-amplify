/* eslint-disable max-len */
import {
  Box,
  Container,
  Typography,
} from '@mui/material';
import React from 'react';
import DesbloqueosForm from './form/DesbloqueosForm';

function Desbloqueos() {
  return (
    <Box sx={{
      padding: '30px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      paddingTop: '50px',
    }}
    >
      <Typography color="white" textAlign="center" variant="h4" fontWeight="800">Todo sobre tu desbloqueo</Typography>
      <Typography color="white" textAlign="center" variant="h5" fontWeight="700">en sencillos pasos</Typography>
      <Container>
        <DesbloqueosForm />
      </Container>
    </Box>
  );
}

export default Desbloqueos;
