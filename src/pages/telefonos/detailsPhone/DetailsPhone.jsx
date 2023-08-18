import {
  Box, Button, Container, Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';

function DetailsPhone() {
  const { id } = useParams();

  const [getPhone, setGetPhone] = useState([]);

  useEffect(() => {
    const URL = 'https://eb5dut1866.execute-api.us-east-1.amazonaws.com/items';

    axios.get(`${URL}/${id}`)
      .then((response) => {
        setGetPhone(response.data);
      })
      .catch((error) => (error));
  }, [id]);

  const navigate = useNavigate();
  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '50px',
    }}
    >
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '30px',
        alignContent: 'center',
        gap: { xs: '30px' },
        flexDirection: { xs: 'column', sm: 'row' },
        marginTop: '40px',
      }}
      >
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          width: { xs: '100%', sm: '40%' },
          backgroundColor: '#2586AF',
          borderRadius: '20px',
          padding: '20px',
        }}
        >
          <Box
            component="img"
            src={getPhone?.image}
            sx={{
              width: { xs: '50%', sm: '70%' },
            }}
          />
        </Box>
        <Box sx={{
          width: { xs: '100%', sm: '50%' },
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          alignItems: { xs: 'normal', sm: 'center' },
          justifyContent: 'center',
        }}
        >
          <Typography variant="h4" color="white" fontWeight="700">Desbloqueo fácil, rápido y seguro</Typography>
          <Typography variant="body1" color="white">
            {getPhone?.description}
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/desbloqueos')}
            sx={{ backgroundColor: '#2586AF', border: '3px solid #E1A73E', borderRadius: '20px' }}
          >
            Desbloquear
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default DetailsPhone;
