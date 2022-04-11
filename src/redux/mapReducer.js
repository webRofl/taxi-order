import {
  getLocationCoordinates,
  getLocationName,
  getCars,
} from '../api/getGeocoding/api';

import { formatDate } from '../utils/date';

const UPDATE_LOCATION = 'mapReducer/UPDATE_LOCATION';
const UPDATE_ZOOM = 'mapReducer/UPDATE_ZOOM';
const UPDATE_LOCATION_NAME = 'mapReducer/UPDATE_LOCATION_NAME';
const UPDATE_PLACEMARK = 'mapReducer/UPDATE_PLACEMARK';
const LOAD_CARS = 'mapReducer/LOAD_CARS';

const initialState = {
  lat: 56.866557,
  lon: 53.2094166,
  placeMark: false,
  zoom: 11,
  locationName: '',
  cars: [],
  crew_id: 0,
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOCATION:
      return {
        ...state,
        lat: action.lat,
        lon: action.lon,
      };
    case UPDATE_ZOOM:
      return {
        ...state,
        zoom: action.zoom,
      };
    case UPDATE_LOCATION_NAME:
      return {
        ...state,
        locationName: action.locationName,
      };
    case UPDATE_PLACEMARK:
      return {
        ...state,
        placeMark: true,
      };
    case LOAD_CARS:
      return {
        ...state,
        cars: action.cars,
      };
    default:
      return state;
  }
};

const updateLocationSuccess = (lat, lon) => ({
  type: UPDATE_LOCATION,
  lat,
  lon,
});

export const updateZoom = (zoom) => ({
  type: UPDATE_ZOOM,
  zoom,
});

export const updateLocationNameSuccess = (locationName) => ({
  type: UPDATE_LOCATION_NAME,
  locationName,
});

export const updatePlaceMark = () => ({
  type: UPDATE_PLACEMARK,
});

export const loadCarsSuccess = (cars) => ({
  type: LOAD_CARS,
  cars,
});

export const getMyLocation = (location) => async (dispatch) => {
  const response = await getLocationCoordinates(location);
  const pos = response.Point.pos.split(' ');
  dispatch(updateLocationSuccess(pos[1], pos[0]));
  dispatch(updateZoom(18));
};

export const getLocationNameThunk = (lat, lon) => async (dispatch) => {
  const locationName = await getLocationName(lat, lon);
  dispatch(updateLocationNameSuccess(locationName));
  dispatch(updateLocationSuccess(lat, lon));
};

export const loadCars = () => async (dispatch, getState) => {
  const cars = await getCars();
  dispatch(loadCarsSuccess(cars));
};

export default mapReducer;
