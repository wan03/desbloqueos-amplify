import React from 'react';
import { useQuery } from '@apollo/client';
import Carousel from '../../components/carousel/Carousel';
import FeaturedPhones from './featuredPhones/FeaturedPhones';
import Servicios from './services/Services';
import WhyUS from './whyUs/WhyUs';
import Spinner from '../../components/spinner/Spinner';
import { getInicio } from '../../shared/api/contentful/queries';
import { toast, ToastContainer } from '../../shared/dist/mdbreact';

const Inicio = () => {
  const {
    data, loading, error,
  } = useQuery(getInicio, { variables: { id: '3jDI1X9rZoL25IpElqhGKZ' } });

  const inicio = data?.inicio;

  if (error) {
    toast.error('Oops, hubo un error por favor intenta de nuevo', {
      closeButton: false,
    });
  }

  if (loading) return <Spinner center />;

  return (
    <>
      <Carousel />
      <FeaturedPhones />
      <Servicios
        servicioTitle={inicio?.servicioTitle}
        servicios={inicio?.serviciosCollection.items}
      />
      <WhyUS whyUsTitle={inicio?.whyUsTitle} whyUsReasons={inicio?.whyUsReasonsCollection.items} />
      <ToastContainer
        hideProgressBar
        newestOnTop
        autoClose={5000}
      />
    </>
  );
};

export default Inicio;
