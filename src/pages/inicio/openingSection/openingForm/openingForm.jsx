import React from 'react';
import {
  Box, Typography, Autocomplete, TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAutocomplete = styled(Autocomplete)({
  '& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)': {
    transform: 'translate(20px, 19px) scale(1);',
  },
  '&.Mui-focused .MuiInputLabel-outlined': {
    color: 'gold',
  },
  '& .MuiAutocomplete-inputRoot': {
    color: 'white',
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-of-type': {
      paddingLeft: '0px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'gold',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'gold',
    },
  },
  '& label': {
    color: 'white',
  },
  '& button': {
    color: 'white',
  },
});

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
];

const openingForm = () => (
  <Box sx={{
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', width: '28vw', height: '25vh', padding: '15px',
  }}
  >
    <Typography color="white" variant="h4" sx={{ textDecoration: 'underline', marginBottom: '15px' }} display="inline">Pais y operadora</Typography>

    <StyledAutocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: '100%', height: '100px' }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Movie"
        />
      )}
    />

    <StyledAutocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: '100%', height: '100px', color: 'white' }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Movie"
        />
      )}
    />
    <Typography color="white" variant="p" display="inline">Pais y operadora Pais y operadora Pais y operadora Pais y operadora Pais y operadora Pais y operadora Pais y operadora Pais y operadora Pais y operadora Pais y operadora Pais y operadora Pais y operadora Pais y operadora Pais y operadora</Typography>
  </Box>
);

export default openingForm;
