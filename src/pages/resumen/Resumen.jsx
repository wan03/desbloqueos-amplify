import {
  Container,
  Typography,
} from '@mui/material';
import React from 'react';
import ResumenForm from './resumenForm/resumenForm';

function Resumen() {
  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
      padding: '3px',
    }}
    >
      <Typography variant="h6" color="initial">
        Resumen
      </Typography>
      <ResumenForm />
    </Container>
  );
}

export default Resumen;
