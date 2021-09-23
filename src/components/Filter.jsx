import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup } from 'react-bootstrap';

const Filter = (props) => {
  const filterValues = (e) => {
    props.setFilter(e.target.value);
  };
  return (
    <InputGroup className="mb-3">
      <span className="input-group-prepend">
        <i className="input-group-text fa fa-search" />
      </span>
      <input type="text" onChange={filterValues} className="form-control no-shadow" placeholder="Search Coin" />
    </InputGroup>
  );
};

export default Filter;
Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};
