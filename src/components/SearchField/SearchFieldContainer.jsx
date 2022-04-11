import React from 'react';
import { connect } from 'react-redux';
import {
  getMyLocation,
  updateLocationNameSuccess,
  updatePlaceMark,
} from '../../redux/mapReducer';
import SearchField from './SearchField';

const MapStateToProps = (state) => ({
  locationName: state.map.locationName,
  cars: state.map.cars,
  placeMark: state.map.placeMark,
});

export default connect(MapStateToProps, {
  getMyLocation,
  updateLocationNameSuccess,
  updatePlaceMark,
})(SearchField);
