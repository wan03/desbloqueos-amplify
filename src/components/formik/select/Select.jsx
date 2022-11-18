import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import Options from '../option/Options';

function Select({ label, options, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <select {...field} {...props} className="browser-default custom-select">
        <Options options={options} />
      </select>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
};

Select.defaultProps = {
  label: '',
};

export default Select;
