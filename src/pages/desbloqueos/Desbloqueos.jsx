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
          width: '30%', position: 'absolute', left: '0', bottom: '-85px', objectFit: 'cover',
        }}
      />
      <CardMedia
        component="img"
        src={forma}
        sx={{
          width: '30%', position: 'absolute', right: '-5%', bottom: '-20%', overflow: 'hidden',
        }}
      />
    </Box>
  );
}

export default Desbloqueos;
