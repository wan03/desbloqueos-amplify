import {
  Box,
  Container,
  Typography,
  CardMedia,
} from '@mui/material';
import React from 'react';
import { LOREM_IPSUM, PLACEHOLDER_IMAGE } from '../../shared/constants/dev';

function Acerca() {
  return (
  /*
    <MDBContainer className="mb-4">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Acerca
      </h2>
      <MDBRow>
        <p>{LOREM_IPSUM}</p>
        <p>{LOREM_IPSUM}</p>
        <p>{LOREM_IPSUM}</p>
      </MDBRow>
      <MDBRow>
        <img src={PLACEHOLDER_IMAGE(300)} className="img-fluid mx-auto d-block" alt="" />
      </MDBRow>
    </MDBContainer>
    */
    <Container sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <Typography variant="h5">
        Acerca
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <Typography variant="body1">
          { LOREM_IPSUM }
        </Typography>
        <Typography variant="body1">
          { LOREM_IPSUM }
        </Typography>
        <Typography variant="body1">
          { LOREM_IPSUM }
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CardMedia component="img" image={PLACEHOLDER_IMAGE(300)} alt="place holder" height="300" />
      </Box>
    </Container>
  );
}

export default Acerca;
