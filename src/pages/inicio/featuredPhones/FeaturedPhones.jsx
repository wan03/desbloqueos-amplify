import {
  Box, Button, Container, Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { CONSTANTS, PATHS } from '../../../shared/constants/Constants';
import CardWithImage from '../../../components/cards/Card';
import { getFeaturedPhones } from '../../../shared/api/getPhones';

function FeaturedPhones() {
  const [featuredPhones, setFeaturedPhones] = useState([]);

  useEffect(() => {
    const phones = getFeaturedPhones();
    setFeaturedPhones([...phones]);
  }, []);

  const cardInformation = featuredPhones.map((phone) => {
    const card = {
      key: phone.id,
      title: phone.name,
      buttontext: CONSTANTS.DESBLOQUEATUCELULAR,
      buttonhref: PATHS.DESBLOQUEOS,
      imgsrc: phone.image,
      text: phone.description,
    };
    return card;
  });

  const navigate = useNavigate();

  const desbloqueosDirection = () => {
    navigate('/telefonos');
  };

  return (
    <Container>
      <Typography variant="h5" alignItems="center"> Teléfonos Destacados </Typography>
      <Box sx={{
        display: 'flex',
        gap: '30px',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: '30px',
      }}
      >
        {
          cardInformation.map((card) => (
            <CardWithImage
              key={card.key}
              title={card.title}
              buttontext={card.buttontext}
              imgsrc={card.imgsrc}
              id={card.key}
            />
          ))
        }
        <Button onClick={desbloqueosDirection} variant="contained"> Mas telefonos </Button>
      </Box>
    </Container>
  );
}

export default FeaturedPhones;
