/* eslint-disable quote-props */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useField } from 'formik';
import {
  Box, FormControl, InputLabel, MenuItem, Typography,
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
  const [field, meta] = useField(props);
  const [valueOptions, setValueOptions] = useState('');
  const opciones = useSelector((state) => state.opciones);
  const [options, setToolOptions] = useState([]);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setValueOptions(event.target.value);
    dispatch(setOpcionesGlobal({ [label]: event.target.value, id: `${id}` }));
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

  let tools = [];
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
  console.log(options);
  // eslint-disable-next-line eqeqeq
  const descripcion = options?.filter((descrip) => descrip.name == valueOptions);

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
            <MenuItem key={option.id} value={option.name}>
              {option.name}
            </MenuItem>
          ))
        }
        </Select>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </FormControl>
      <Typography sx={{ width: { xs: '100%', sm: '50%' } }}>
        {
          descripcion[0]?.desc
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
