/* import axios from 'axios';
import React from 'react';

const baseURL = 'https://z3djga9l6h.execute-api.us-east-2.amazonaws.com';
function paises() {
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    axios.get(baseURL).then((response) => { setPost(response.data); });
  }, []);
  if (!post) { return null; }
  return (post);
}
const prueba = paises();
console.log(prueba);
*/
export const formatForOptions = (rawOptions) => rawOptions.map(
  (option) => ({ value: option.id, text: option.name }),
);

export const countries = [
  {
    id: '1146',
    name: 'Argentina',
  },
  {
    id: '1024',
    name: 'Rep. Dominican',
  },
  {
    id: '1150',
    name: 'Venezuela',
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
    name: 'Apple',
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

export const tools = [
  {
    id: '40',
    name: 'Samsung - USA Standard Service',
    desc: 'Our Standard Service scans LOCAL databases and is our low-cost solution with a very high success rate.If your unlocking code is unavailable after scanning LOCAL databases, we will issue you a full refund so you can use our Premium Service which scans databases located WORLDWIDE and guarantees the availability of your unlocking code. IMPORTANT! If your Samsung phone has received technical support or you have tried to unlock it without success in the past, make your request directly through our Premium Service. Valid for all Samsung models.',
  },
  {
    id: '41',
    name: 'Samsung - USA Standard Service 1',
    desc: '1 Our Standard Service scans LOCAL databases and is our low-cost solution with a very high success rate.If your unlocking code is unavailable after scanning LOCAL databases, we will issue you a full refund so you can use our Premium Service which scans databases located WORLDWIDE and guarantees the availability of your unlocking code. IMPORTANT! If your Samsung phone has received technical support or you have tried to unlock it without success in the past, make your request directly through our Premium Service. Valid for all Samsung models.',
  },
  {
    id: '42',
    name: 'Samsung - USA Standard Service 2',
    desc: '2 Our Standard Service scans LOCAL databases and is our low-cost solution with a very high success rate.If your unlocking code is unavailable after scanning LOCAL databases, we will issue you a full refund so you can use our Premium Service which scans databases located WORLDWIDE and guarantees the availability of your unlocking code. IMPORTANT! If your Samsung phone has received technical support or you have tried to unlock it without success in the past, make your request directly through our Premium Service. Valid for all Samsung models.',
  },
  {
    id: '43',
    name: 'Samsung - USA Standard Service 3',
    desc: '3 Our Standard Service scans LOCAL databases and is our low-cost solution with a very high success rate.If your unlocking code is unavailable after scanning LOCAL databases, we will issue you a full refund so you can use our Premium Service which scans databases located WORLDWIDE and guarantees the availability of your unlocking code. IMPORTANT! If your Samsung phone has received technical support or you have tried to unlock it without success in the past, make your request directly through our Premium Service. Valid for all Samsung models.',
  },
];
