import {
  Box,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import React from 'react';
import { LOREM_IPSUM } from '../../shared/constants/dev';
import DesbloqueosForm from './form/DesbloqueosForm';

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
          <CardMedia component="img" height="300" image="https://via.placeholder.com/300" />
        </Box>
        <Box>
          <Typography>
            {LOREM_IPSUM}
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
