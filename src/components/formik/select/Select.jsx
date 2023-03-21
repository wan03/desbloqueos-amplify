/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useField } from 'formik';
import { FormControl, InputLabel, MenuItem } from '@mui/material';
import PropTypes from 'prop-types';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { setOpcionesGlobal } from '../../../store/slices/opciones.slice';

function SelectInput({
  label, options, ...props
}) {
  const [field, meta] = useField(props);
  const [valueOptions, setValueOptions] = useState('');
  const opciones = useSelector((state) => state.opciones);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setValueOptions(event.target.value);
    // opciones.push(
    //   {
    //     [label]: event.target.value,
    //   },
    // );
    dispatch(setOpcionesGlobal());
    console.log(opciones);
  };
  return (
    <FormControl sx={{ width: { xs: '100%', sm: '50%' } }}>
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
            <MenuItem key={option.value} value={option.text}>
              {option.text}
            </MenuItem>
          ))
        }
      </Select>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </FormControl>
  );
}

Select.propTypes = {
  label: PropTypes.string,
}.isRequired;

Select.defaultProps = {
  label: '',
};

export default SelectInput;
