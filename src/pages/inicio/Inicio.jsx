import React from 'react';
import { useQuery } from '@apollo/client';
import { Box } from '@mui/material';
import Carousel from '../../components/carousel/Carousel';
import FeaturedPhones from './featuredPhones/FeaturedPhones';
import Servicios from './services/Services';
import WhyUS from './whyUs/WhyUs';
import Spinner from '../../components/spinner/Spinner';
import { getInicio } from '../../shared/api/contentful/queries';

function Inicio() {
  const { data, loading } = useQuery(getInicio, { variables: { id: '3jDI1X9rZoL25IpElqhGKZ' } });

  const inicio = data?.inicio;
  if (loading === false) return <Spinner center />;

  return (
    <Box sx={{
      flexDirection: 'column',
      display: 'flex',
      justifyContent: 'center',
      gap: '50px',
      padding: '20px',
      alignItems: 'center',
      width: '90%',
    }}
    >
      <Carousel />
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
