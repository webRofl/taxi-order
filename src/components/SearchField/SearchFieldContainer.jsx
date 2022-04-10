import React from 'react';
import { connect } from 'react-redux';
import { updateLocation, getMyLocation } from '../../redux/mapReducer';
import SearchField from './SearchField';

const MapStateToProps = (state) => ({});

export default connect(MapStateToProps, { updateLocation, getMyLocation })(
  SearchField
);
