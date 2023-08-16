/* eslint-disable max-len */
import {
  Box,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import React from 'react';
import DesbloqueosForm from './form/DesbloqueosForm';
import mujer from '../../shared/image/17(1).png';
import forma from '../../shared/image/18(1).png';

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
      <CardMedia
        component="img"
        src={mujer}
        sx={{
          width: '30%', height: '40%', position: 'absolute', left: '-2%', bottom: '-0%', objectFit: 'cover', display: { xs: 'none', md: 'flex' },
        }}
      />
      <CardMedia
        component="img"
        src={forma}
        sx={{
          width: '30%', position: 'absolute', right: '0%', bottom: '0%', display: { xs: 'none' },
        }}
      />
    </Box>
  );
}

export default Desbloqueos;
