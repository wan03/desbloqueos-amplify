import React from 'react';
import PropTypes from 'prop-types';

function Options({ options }) {
  return (
    <>
      {options.map((option) => (
        <option key={option.value} value={option.value}>{option.text}</option>
      ))}
    </>
  );
}

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
};

export default Options;
