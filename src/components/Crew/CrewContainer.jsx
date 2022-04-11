import React from 'react';
import { connect } from 'react-redux';
import Crew from './Crew';

const MapStateToProps = (state) => ({
  cars: state.map.cars,
});

export default connect(MapStateToProps, null)(Crew);
