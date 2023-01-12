import { featuredPhonesMock, allPhonesMock } from './featuredPhonesMock';

export const getPhones = () => {
  const allPhones = allPhonesMock;
  return allPhones;
};

export const getFeaturedPhones = () => {
  const featuredPhones = featuredPhonesMock;

  return featuredPhones;
};
