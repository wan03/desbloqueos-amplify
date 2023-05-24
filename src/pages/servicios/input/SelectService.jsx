/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useField } from 'formik';
import {
  Box, FormControl, InputLabel, MenuItem, Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { setOpcionesGlobal } from '../../../store/slices/opciones.slice';

function SelectService({
  label, options, id, ...props
}) {
  const [field, meta] = useField(props);
  const [valueOptions, setValueOptions] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setValueOptions(event.target.value);
    dispatch(setOpcionesGlobal({ [label]: event.target.value, id: `${id}` }));
  };

  // eslint-disable-next-line eqeqeq
  const descripcion = options.filter((descrip) => descrip.name == valueOptions);

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
          options.map((option) => (
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
