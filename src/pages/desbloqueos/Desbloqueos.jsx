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
    <Container>
      <Typography variant="h5"> Desbloqueos </Typography>
      <Container>
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
    </Container>
  );
}

export default Desbloqueos;
