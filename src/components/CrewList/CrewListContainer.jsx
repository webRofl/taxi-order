import React from 'react';
import { connect } from 'react-redux';
import CrewList from './CrewList';

const MapStateToProps = (state) => ({
  cars: state.map.cars,
});

export default connect(MapStateToProps, null)(CrewList);
