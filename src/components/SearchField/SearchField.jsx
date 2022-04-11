import React from 'react';
import classes from './SearchField.module.css';
import { validateOrderInput } from '../../utils/validate';

const SearchField = (props) => {
  const handleChange = (event) => {
    props.updateLocationNameSuccess(event.target.value);
    props.getMyLocation(event.target.value);
    if (!props.placeMark) props.updatePlaceMark();
  };

  return (
    <form className={classes.orderForm}>
      <label className={classes.orderForm__label}>Откуда</label>
      <input
        placeholder="type your location"
        className={`${classes.orderForm__input} ${
          !validateOrderInput(props.locationName) &&
          props.locationName.length !== 0
            ? classes.orderForm_error
            : ''
        }`}
        onChange={handleChange}
        value={props.locationName}
      />
    </form>
  );
};

export default SearchField;
