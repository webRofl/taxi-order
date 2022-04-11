import React from 'react';
import { connect } from 'react-redux';
import Order from './Order';
import { loadCars, updateZoom } from '../../redux/mapReducer';

const MapStateToProps = (state) => ({
  address: state.map.locationName,
  lat: state.map.lat,
  lon: state.map.lon,
});

export default connect(MapStateToProps, { loadCars, updateZoom })(Order);
