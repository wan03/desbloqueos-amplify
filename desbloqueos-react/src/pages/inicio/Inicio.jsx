import React from 'react';
import Carousel from '../../components/carousel/Carousel';
import FeaturedPhones from './featuredPhones/FeaturedPhones';
import Servicios from './services/Services';
import WhyUS from './whyUs/WhyUs';

const Inicio = () => (
  <>
    <Carousel />
    <FeaturedPhones />
    <Servicios />
    <WhyUS />
  </>
);

export default Inicio;
