import axios from 'axios';
import { useState, useEffect } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const GetDevice = () => {
  const [getDevice, setGetDevice] = useState();
  useEffect(() => {
    const URL = 'https://t4q0kvdhu4.execute-api.us-east-1.amazonaws.com/items';

    axios.get(URL)
      .then((response) => {
        setGetDevice(response.data);
      })
      .catch((error) => (error));
  }, []);
  return { getDevice };
};
export const featuredPhonesMock = [
  {
    brandDrSimID: '29',
    description: 'sin decripcion',
    drSimID: '25327',
    expirationTime: 1690901835,
    id: '339974e8-895a-45a7-8cca-6e603c9ef448',
    image: 'https://img2.doctorsim.com/img/term/iphone_14_pro.png',
    name: 'iPhone 14 Pro',
  },
  {
    brandDrSimID: '29',
    description: 'sin decripcion',
    drSimID: '20403',
    expirationTime: 1690901835,
    id: 'f829f2cf-e80b-4cfb-8604-a0af7df927cb',
    image: 'https://img1.doctorsim.com/img/term/iphone_xs.png',
    name: 'iPhone Xs',
  },
  {
    brandDrSimID: '22',
    description: 'sin decripcion',
    drSimID: '15531',
    expirationTime: 1690901835,
    id: 'ef949ba7-ff9d-454d-9f06-3d1c2af6772f',
    image: 'https://img3.doctorsim.com/img/term/huawei_ascend_g510.png',
    name: 'Todos los modelos Huawei',
  },

];
