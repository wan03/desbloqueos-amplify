/* eslint-disable indent */
/* eslint-disable space-before-blocks */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable camelcase */
/* eslint-disable no-console */
import axios from 'axios';
import { environments } from '../environments/environment';

const env = environments;

const getToolsDrSim = async (id_terminal, id_operador) => {
  let respuesta = [];
  try {
    const { data } = await axios.get(`${env.apiDrSimTools}/${id_terminal}/${id_operador}`);
    console.log(data);
    respuesta = data?.res?.tools;
    // eslint-disable-next-line no-restricted-syntax, prefer-const
    for (let tool of data?.res?.tools){
        respuesta.push({ id: tool.id_tool, name: tool.name, desc: tool.desc });
    }
  } catch (error) {
    console.log(error);
  }

  return respuesta;
};

export default getToolsDrSim;
