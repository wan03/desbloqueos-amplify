import React from 'react';
import {
  Box, CardMedia,
} from '@mui/material';
import WifiIcon from '@mui/icons-material/Wifi';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import mujer from '../../../shared/image/17(1).png';
import OpeningForm from './openingForm/openingForm';
import Providers from './providers/providers';

const openingSection = () => (
  <Box sx={{
    display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', height: '50%', paddingBottom: '250px',
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
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '500px', height: '60vh', gap: '20px',
    }}
    >
      <Box sx={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', backgroundColor: '#2586AF', borderRadius: '10px', width: '450px', height: '80%', position: 'relative', border: '2px solid white', padding: '15px',
      }}
      >
        <Box sx={{
          display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '70%',
        }}
        >
          <Box sx={{
            height: '70px', width: '70px', borderRadius: '50%', border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
          >
            <WifiIcon sx={{ color: 'white', transform: 'scale(1.8)' }} />
          </Box>
          <Box sx={{
            height: '70px', width: '70px', borderRadius: '50%', border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
          >
            <LockOpenIcon sx={{ color: 'white', transform: 'scale(1.8)' }} />
          </Box>
          <Box sx={{
            height: '70px', width: '70px', borderRadius: '50%', border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
          >
            <AttachMoneyIcon sx={{ color: 'white', transform: 'scale(1.8)' }} />
          </Box>
        </Box>
        <CardMedia
          component="img"
          src={mujer}
          sx={{
            width: '100%', height: '82%', position: 'absolute', bottom: '-57px', left: '0',
          }}
        />
      </Box>
    </Box>
  </Box>
);

export default openingSection;
