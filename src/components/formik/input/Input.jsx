import React from 'react';
import PropTypes from 'prop-types';
import {
  MDBInput,
} from '../../../shared/mdbreact/mdbreact';

const Input = ({
  name, label, placeholder, validation, ...props
}) => (
  <div className="mb-2">
    <MDBInput name={name} label={label} placeholder={placeholder} {...props} />
    {validation?.touched?.[name] && validation?.errors ? (
      <div className="error">{validation?.errors?.[name]}</div>
    ) : null}
  </div>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
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
