import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/cards/Card';
import { CONSTANTS } from '../../shared/constants/Constants';

function Telefonos() {
  const [getDevice, setGetDevice] = useState();
  useEffect(() => {
    const URL = 'https://eb5dut1866.execute-api.us-east-1.amazonaws.com/items';

    axios.get(URL)
      .then((response) => {
        setGetDevice(response.data);
      })
      .catch((error) => (error));
  }, []);
  return (
    <Container sx={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h5"> Telefonos </Typography>
      <Box sx={{
        display: 'flex',
        gap: '30px',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: '30px',
      }}
      >
        {
          getDevice?.map((phone) => (
            <Card
              key={phone.id}
              title={phone.name}
              imgsrc={phone.image}
              buttontext={CONSTANTS.DESBLOQUEATUCELULAR}
              id={phone.id}
            />
          ))
        }
      </Box>
    </Container>
  );
}

export default Telefonos;
