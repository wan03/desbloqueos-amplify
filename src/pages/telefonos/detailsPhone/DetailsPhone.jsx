import {
  Box, Button, Container, Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getPhones } from '../../../shared/api/getPhones';
import Carousel from '../../../components/carousel/Carousel';
import FeaturedPhones from '../../inicio/featuredPhones/FeaturedPhones';

function DetailsPhone() {
  const { id } = useParams();

  const [getPhone, setGetPhone] = useState([]);

  useEffect(() => {
    const phones = getPhones();
    setGetPhone([...phones]);
  }, []);

  const filtered = getPhone.filter((phone) => phone.id === id);
  return (
    <Container>
      <Box>
        <Carousel />
        <Typography variant="body1">
          {filtered[0]?.description}
        </Typography>
        <Button variant="contained"> Desbloquear </Button>
      </Box>
      <FeaturedPhones />
    </Container>
  );
}

export default DetailsPhone;
