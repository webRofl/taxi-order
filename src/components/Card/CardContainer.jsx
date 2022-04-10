import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

const MapStateToProps = (state) => ({
  lat: state.map.lat,
  lon: state.map.lon,
});

export default connect(MapStateToProps, null)(Card);
