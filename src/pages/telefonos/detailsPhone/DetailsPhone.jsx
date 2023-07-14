import {
  Box, Button, Container, Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import FeaturedPhones from '../../inicio/featuredPhones/FeaturedPhones';

function DetailsPhone() {
  const { id } = useParams();

  const [getPhone, setGetPhone] = useState([]);

  useEffect(() => {
    const URL = 'https://t4q0kvdhu4.execute-api.us-east-1.amazonaws.com/items';

    axios.get(`${URL}/${id}`)
      .then((response) => {
        setGetPhone(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

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
        alignItems: 'center',
        gap: { xs: '30px' },
        flexDirection: { xs: 'column', sm: 'row' },
      }}
      >
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          width: { xs: '100%', sm: '40%' },
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
        }}
        >
          <Typography variant="body1">
            {getPhone?.description}
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/desbloqueos')}
          >
            Desbloquear
          </Button>
        </Box>
      </Box>
      <FeaturedPhones />
    </Container>
  );
}

export default DetailsPhone;
