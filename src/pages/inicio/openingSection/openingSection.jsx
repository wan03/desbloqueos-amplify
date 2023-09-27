import React from 'react';
import {
  Box, CardMedia, Typography,
} from '@mui/material';
import WifiIcon from '@mui/icons-material/Wifi';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import mujer from '../../../shared/image/17(1).png';
import OpeningForm from './openingForm/openingForm';
import Providers from './providers/providers';

const openingSection = () => (
  <Box sx={{
    gap: '30px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', height: '50%', paddingBottom: '250px',
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
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '500px', height: '64vh', gap: '20px',
    }}
    >
      <Box sx={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', background: 'linear-gradient(to bottom right ,#091a30, blue)', borderRadius: '10px', width: '500px', height: '80%', position: 'relative', border: '2px solid #E3A72F', padding: '15px',
      }}
      >
        <Box sx={{
          display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '70%', gap: '35px',
        }}
        >
          <Box sx={{
            width: '25%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          }}
          >
            <Box sx={{
              height: '50px', width: '50px', borderRadius: '50%', border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            >
              <WifiIcon sx={{ color: 'white', transform: 'scale(1.2)' }} />
            </Box>
            <Typography
              sx={{
                paddingTop: '5px', margin: '0px', fontWeight: 'bold', color: 'white', textAlign: 'center',
              }}
            >
              Connecting
            </Typography>
          </Box>
          <Box sx={{
            width: '25%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          }}
          >
            <Box sx={{
              height: '50px', width: '50px', borderRadius: '50%', border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            >
              <LockOpenIcon sx={{ color: 'white', transform: 'scale(1.2)' }} />
            </Box>
            <Typography
              sx={{
                paddingTop: '5px', margin: '0px', fontWeight: 'bold', color: 'white', textAlign: 'center',
              }}
            >
              Unlocking
            </Typography>
          </Box>
          <Box sx={{
            width: '25%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          }}
          >
            <Box sx={{
              height: '50px', width: '50px', borderRadius: '50%', border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            >
              <LocalAtmIcon sx={{ color: 'white', transform: 'scale(1.2)' }} />
            </Box>
            <Typography
              sx={{
                paddingTop: '5px', margin: '0px', fontWeight: 'bold', color: 'white', textAlign: 'center',
              }}
            >
              Saving
            </Typography>
          </Box>
        </Box>
        <CardMedia
          component="img"
          src={mujer}
          sx={{
            width: '100%', height: '100%', position: 'absolute', bottom: '-102px', left: '0',
          }}
        />
      </Box>
    </Box>
  </Box>
);

export default openingSection;
