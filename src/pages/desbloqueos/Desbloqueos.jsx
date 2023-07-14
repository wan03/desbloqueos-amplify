/* eslint-disable max-len */
import {
  Box,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import React from 'react';
import DesbloqueosForm from './form/DesbloqueosForm';
import ImagenDesbloquea from '../../shared/image/Desbloquea tu cel (1) (1).png';

function Desbloqueos() {
  return (
    <Box sx={{
      padding: '30px',
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
    }}
    >
      <Typography variant="h5"> Desbloqueos </Typography>
      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
      }}
      >
        <Box>
          <CardMedia component="img" image={ImagenDesbloquea} sx={{ width: { sm: '100%', xs: '100%' }, height: { sm: 600, xs: 200 } }} />
        </Box>
        <Box>
          <Typography>
            En Desbloquea tu Cel , nos esforzamos por ofrecerte el mejor servicio de desbloqueo de teléfonos inteligentes. Nuestra dedicación a la excelencia, la garantía de éxito, la rapidez, la atención al cliente y los precios competitivos nos convierten en la elección perfecta para satisfacer todas tus necesidades de desbloqueo. ¡No dudes en contactarnos y descubre la diferencia que podemos hacer en tu experiencia con tu teléfono inteligente!
          </Typography>
        </Box>
      </Container>
      <Container>
        <DesbloqueosForm />
      </Container>
    </Box>
  );
}

export default Desbloqueos;
