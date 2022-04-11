import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import { getLocationNameThunk, updatePlaceMark } from '../../redux/mapReducer';

const MapStateToProps = (state) => ({
  lat: state.map.lat,
  lon: state.map.lon,
  zoom: state.map.zoom,
  placeMark: state.map.placeMark,
  cars: state.map.cars,
});

export default connect(MapStateToProps, {
  getLocationNameThunk,
  updatePlaceMark,
})(Card);
