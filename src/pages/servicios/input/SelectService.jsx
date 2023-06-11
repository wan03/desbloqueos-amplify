/* eslint-disable quote-props */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useField } from 'formik';
import {
  Box, FormControl, InputLabel, MenuItem, TextField, Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { setOpcionesGlobal } from '../../../store/slices/opciones.slice';
import getToolsDrSim from '../../../api/drsimtools';
// import { formatForOptions } from '../../desbloqueos/form/desbloqueosFormUtils';

function SelectService({
  label, id, ...props
}) {
  let tools = [];
  let descripcion;
  const [field, meta] = useField(props);
  const [valueOptions, setValueOptions] = useState('');
  const [price, setPrice] = useState('');
  const [timeMin, setTimeMin] = useState('');
  const [timeMax, setTimeMax] = useState('');
  const [avg, setAvg] = useState('');
  const opciones = useSelector((state) => state.opciones);
  const [options, setToolOptions] = useState([]);
  const dispatch = useDispatch();

  function buscarElementoAsync(services, idServ) {
    return new Promise((resolve) => {
      const serviceFinded = services.find((elemento) => elemento.id === idServ);
      if (serviceFinded) {
        resolve(serviceFinded);
      }
    });
  }

  function resumir(textoLargo) {
    const chater = '.';
    let newText = '';
    const arr = textoLargo.split(chater);
    newText = arr[0] + chater + arr[1] + chater + arr[3] + chater;
    if (newText.length < 415 && arr[4]) {
      newText += arr[4];
    }
    return newText;
  }

  const handleChange = async (event) => {
    setValueOptions(event.target.value);
    descripcion = await buscarElementoAsync(options, event.target.value);
    descripcion.desc = resumir(descripcion?.desc);
    setPrice(descripcion?.price);
    setTimeMin(descripcion?.timeMin);
    setTimeMax(descripcion?.timeMax);
    setAvg(descripcion?.avg);
    dispatch(setOpcionesGlobal({ [label]: descripcion.name, id: `${id}`, idReg: `${valueOptions}` }));
    dispatch(setOpcionesGlobal({ id: '7', price: `${descripcion.price}` }));
    dispatch(setOpcionesGlobal({ id: '8', timeMin: `${descripcion.timeMin}` }));
    dispatch(setOpcionesGlobal({ id: '9', timeMax: `${descripcion.timeMax}` }));
    dispatch(setOpcionesGlobal({ id: '10', avg: `${descripcion.avg}` }));
  };

  const getTools = async () => {
    let servicios = [];
    // eslint-disable-next-line camelcase
    const id_terminal = opciones[3].idReg;
    // eslint-disable-next-line camelcase
    const id_operador = opciones[1].idReg;
    // eslint-disable-next-line camelcase
    console.log(`terminal: ${id_terminal}`);
    // eslint-disable-next-line camelcase
    console.log(`operador: ${id_operador}`);
    await getToolsDrSim(id_terminal, id_operador)
      .then((respuesta) => {
        servicios = respuesta;
      })
      .catch((error) => {
        console.log(error);
      });
    return servicios;
  };

  useEffect(() => {
    const fetchData = async () => {
      if (opciones[3]?.idReg !== undefined && opciones[1] !== undefined) {
        try {
          const optionsTools = await getTools();
          tools = optionsTools.map((opt) => {
            const tool = {
              id: opt.id_tool,
              name: opt.name,
              desc: opt.desc,
              price: opt.price,
              timeMin: opt.time.min,
              timeMax: opt.time.max,
              avg: opt.avg,
            };
            return tool;
          });
          setToolOptions(tools);
          console.log(tools);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchData();
  }, []);

  // eslint-disable-next-line eqeqeq
  descripcion = options?.find((descrip) => descrip.id == valueOptions);
  // descripcion = buscarElementoAsync(options, valueOptions);
  return (
    <Box sx={{
      display: 'flex',
      gap: '10px',
      padding: '20px',
      justifyContent: 'center',
      width: '100%',
      flexDirection: 'row',
    }}
    >
      <FormControl sx={{ width: { xs: '100%', sm: '40%' } }}>
        <InputLabel id={field.name}>{label}</InputLabel>
        <Select
          labelId={field.name}
          id={field.name}
          value={valueOptions}
          onChange={handleChange}
          label={label}
        >
          {
          options?.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))
        }
        </Select>
        <TextField id="txtPrice" label="Precio $" variant="filled" value={price} InputProps={{ readOnly: true }} />
        <TextField id="txtTimeMin" label="Dias Minimo" variant="filled" value={timeMin} InputProps={{ readOnly: true }} />
        <TextField id="txtTimeMax" label="Dias Maximo" variant="filled" value={timeMax} InputProps={{ readOnly: true }} />
        <TextField id="txtAvg" label="Promedio" variant="filled" value={avg} InputProps={{ readOnly: true }} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </FormControl>
      <Typography sx={{ width: { xs: '100%', sm: '50%' } }}>
        {
          descripcion?.desc
        }
      </Typography>
    </Box>
  );
}

Select.propTypes = {
  label: PropTypes.string,
}.isRequired;

Select.defaultProps = {
  label: '',
};

export default SelectService;
