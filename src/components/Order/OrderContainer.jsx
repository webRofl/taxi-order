import React from 'react';
import { connect } from 'react-redux';
import Order from './Order';
import { loadCars, updateZoom, setError } from '../../redux/mapReducer';

const MapStateToProps = (state) => ({
  address: state.map.locationName,
  lat: state.map.lat,
  lon: state.map.lon,
  crew_id: state.map.crew_id,
});

export default connect(MapStateToProps, { loadCars, updateZoom, setError })(
  Order
);
