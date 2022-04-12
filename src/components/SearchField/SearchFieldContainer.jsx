import React from 'react';
import { connect } from 'react-redux';
import {
  getMyLocation,
  updateLocationNameSuccess,
  updatePlaceMark,
  setError,
} from '../../redux/mapReducer';
import SearchField from './SearchField';

const MapStateToProps = (state) => ({
  locationName: state.map.locationName,
  cars: state.map.cars,
  placeMark: state.map.placeMark,
  error: state.map.error,
});

export default connect(MapStateToProps, {
  getMyLocation,
  updateLocationNameSuccess,
  updatePlaceMark,
  setError,
})(SearchField);
