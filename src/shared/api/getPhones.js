import { featuredPhonesMock, GetDevice } from './featuredPhonesMock';

export const getPhones = () => {
  const allPhones = GetDevice;
  return allPhones;
};

export const getFeaturedPhones = () => {
  const featuredPhones = featuredPhonesMock;

  return featuredPhones;
};
