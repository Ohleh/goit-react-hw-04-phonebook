import React from 'react';
import propTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <label>
    Find Contacts by name
    <br />
    <input type="text" value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default Filter;
