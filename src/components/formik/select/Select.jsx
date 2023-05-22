/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useField } from 'formik';
import { FormControl, InputLabel, MenuItem } from '@mui/material';
import PropTypes from 'prop-types';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { setOpcionesGlobal } from '../../../store/slices/opciones.slice';

function SelectInput({
  label, options, id, ...props
}) {
  const [field, meta] = useField(props);
  const [valueOptions, setValueOptions] = useState('');
  const dispatch = useDispatch();

  // eslint-disable-next-line arrow-body-style
  async function findAsync(arr, valor) {
    // eslint-disable-next-line no-return-await
    return await arr.find((m) => m.text === valor);
  }
  let opt = [];
  async function handleChange(event) {
    opt = await findAsync(options, event.target.value);
    setValueOptions(event.target.value);
    dispatch(setOpcionesGlobal({ [label]: event.target.value, id: `${id}`, idReg: `${opt.value}` }));
  }
  return (
    <FormControl sx={{ width: { xs: '100%', sm: '50%' } }}>
      <InputLabel id={field.name}>{label}</InputLabel>
      <Select
        labelId={field.name}
        id={field.name}
        value={valueOptions}
        // eslint-disable-next-line react/jsx-no-bind
        onChange={handleChange}
        label={label}
      >
        {
          options.map((option) => (
            <MenuItem key={option.value} name={option.value} value={option.text}>
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
