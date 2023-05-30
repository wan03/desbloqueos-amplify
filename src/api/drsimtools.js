/* eslint-disable no-console */
import axios from 'axios';

const url = 'https://api.doctorsim.com/tools/15910/1';
const config = {
  headers: {
    DSIM_KEY: 'sbox3i4QEgwwGe83rN',
    DSIM_SECRET: 'C8xfdtXJ9i4s7fBUUzzh',
  },
};

const getToolsDrSim = async () => {
  let respuesta = [];
  try {
    const { data } = await axios.get(url, config);
    console.log(data);
    respuesta = data;
  } catch (error) {
    console.log(error);
  }

  return respuesta;
};

export default getToolsDrSim;
