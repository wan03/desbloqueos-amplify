import React from 'react';
import {
  Box, CardMedia,
} from '@mui/material';
import mujer from '../../../shared/image/17(1).png';
import OpeningForm from './openingForm/openingForm';
import Providers from './providers/providers';

const openingSection = () => (
  <Box sx={{
    display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', height: '50%',
  }}
  >
    <Box sx={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    }}
    >
      <Providers />
      <OpeningForm />

    </Box>
    <Box sx={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '500px', height: '45vh',
    }}
    >
      <Box sx={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#2586AF', borderRadius: '10px', width: '450px', height: '38vh', position: 'relative', border: '2px solid white',
      }}
      >
        <CardMedia
          component="img"
          src={mujer}
          sx={{
            width: '100%', height: '100%', position: 'absolute', bottom: '-47px', left: '0',
          }}
        />
      </Box>
    </Box>
  </Box>
);

export default openingSection;
