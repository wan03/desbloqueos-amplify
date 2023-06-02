/* eslint-disable indent */
/* eslint-disable space-before-blocks */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable camelcase */
/* eslint-disable no-console */
import axios from 'axios';
import { environments } from '../environments/environment';

const env = environments;

const getToolsDrSim = async (id_terminal, id_operador) => {
  let tools = [];
  try {
    const { data } = await axios.get(`${env.apiDrSimTools}/${id_terminal}/${id_operador}`);
    console.log(data);
    tools = data.res.tools;
  } catch (error) {
    console.log(error);
  }

  return tools;
};

export default getToolsDrSim;
