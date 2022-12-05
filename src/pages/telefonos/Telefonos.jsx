import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Card from '../../components/cards/Card';
import { getPhones } from '../../shared/api/getPhones';
import { CONSTANTS } from '../../shared/constants/Constants';

function Telefonos() {
  const [getPhone, setGetPhone] = useState([]);

  useEffect(() => {
    const phones = getPhones();
    setGetPhone([...phones]);
  }, []);
  return (
    <Container>
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
          getPhone.map((phone) => (
            <Card
              key={phone.id}
              title={phone.name}
              imgSrc={phone.imageURL}
              buttonText={CONSTANTS.DESBLOQUEATUCELULAR}
              id={phone.id}
            />
          ))
        }
      </Box>
    </Container>
  );
}

export default Telefonos;
