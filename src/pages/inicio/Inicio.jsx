import React from 'react';
import { useQuery } from '@apollo/client';
import {
  Box, CardMedia, Fab, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router';
import Navbar from '../../components/navbar/Navbar';
import OpeningSection from './openingSection/openingSection';
import FeaturedPhones from './featuredPhones/FeaturedPhones';
import Servicios from './services/Services';
import WhyUS from './whyUs/WhyUs';
import Spinner from '../../components/spinner/Spinner';
import { getInicio } from '../../shared/api/contentful/queries';
import imagenLateral from '../../shared/image/1(6).png';

function Inicio() {
  const { data, loading } = useQuery(getInicio, { variables: { id: '3jDI1X9rZoL25IpElqhGKZ' } });

  const inicio = data?.inicio;
  if (loading === false) return <Spinner center />;

  const navigate = useNavigate();

  const goContactanos = () => {
    navigate('/contactanos');
  };

  return (
    <Box sx={{
      flexDirection: 'column',
      display: 'flex',
      justifyContent: 'center',
      gap: '40px',
      paddingTop: '50px',
      alignItems: 'center',
      width: '100%',
    }}
    >
      <Navbar />
      <Fab
        variant="extended"
        sx={{
          position: 'fixed', top: '150px', right: { xs: '10px', sm: '40px' }, backgroundColor: '#2586AF', border: '8px solid #E1A73E', padding: '20px',
        }}
        size="large"
        onClick={goContactanos}
      >
        <Typography fontWeight="800"> Contactanos </Typography>
      </Fab>
      <CardMedia
        component="img"
        src={imagenLateral}
        sx={{
          width: '40%', position: 'absolute', left: '-20%', top: '50%',
        }}
      />
      <OpeningSection />
      <FeaturedPhones />
      <WhyUS whyUsTitle={inicio?.whyUsTitle} whyUsReasons={inicio?.whyUsReasonsCollection.items} />
      <Servicios
        servicioTitle={inicio?.servicioTitle}
        servicios={inicio?.serviciosCollection.items}
      />
    </Box>
  );
}

export default Inicio;
