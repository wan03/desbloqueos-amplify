/* eslint-disable react/prop-types */
import { Container, TextField, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

function Input({
  name, label, value, handleInputChange, placeholder, validation, ...props
}) {
  return (
    <Container sx={{ display: 'column', gap: '50px' }}>
      {validation?.touched?.[name] && validation?.errors ? (
        <Typography variant="body1" color="primary">
          {validation?.errors?.[name]}
        </Typography>
      ) : null}
      <TextField
        name={name}
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        {...props}
        variant="outlined"
      />
    </Container>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  validation: PropTypes.objectOf(
    PropTypes.object,
    PropTypes.object,
  ).isRequired,
};

Input.defaultProps = {
  label: '',
  placeholder: '',
};

export default Input;
