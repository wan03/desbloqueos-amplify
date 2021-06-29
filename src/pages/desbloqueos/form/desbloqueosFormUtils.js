export const formatForOptions = (rawOptions) => rawOptions.map(
  (option) => ({ value: option.id, text: option.name }),
);

export const countries = [
  {

    id: '1146',
    name: 'Argentina',

  },
  {
    id: '1932',
    name: 'Canada',
  },
  {
    id: '1937',
    name: 'China',
  },
];

export const networks = [
  {
    id: '1',
    name: 'Movistar',
  },
  {
    id: '2',
    name: 'Vodafone',
  },
  {
    id: '3',
    name: 'Orange',
  },
  {
    id: '4',
    name: 'Yoigo',
  },
];

export const brands = [
  {
    id: '1',
    name: 'Alcatel',
  },
  {
    id: '6',
    name: 'LG',
  },
  {
    id: '15',
    name: 'Samsung',
  },
  {
    id: '29',
    name: 'iPhone',
  },
];

export const devices = [
  {
    id: '1',
    name: 'Galaxy Note 10',
    image: 'https://via.placeholder.com/75',
    description: 'Alguna Descripcion1',
  },
  {
    id: '6',
    name: 'iPhone 12',
    image: 'https://via.placeholder.com/75',
    description: 'Alguna Descripcion2',
  },
  {
    id: '15',
    name: 'Pixel 3',
    image: 'https://via.placeholder.com/75',
    description: 'Alguna Descripcion3',
  },
  {
    id: '29',
    name: 'OnePlus 7',
    image: 'https://via.placeholder.com/75',
    description: 'Alguna Descripcion4',
  },
];
