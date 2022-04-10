import { getLocationCoordinates } from '../api/getGeocoding/api';

const UPDATE_LOCATION = 'mapReducer/UPDATE_LOCATION';

const initialState = {
  lat: 56.866557,
  lon: 53.2094166,
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOCATION:
      return {
        ...state,
        lat: action.lat,
        lon: action.lon,
      };
    default:
      return state;
  }
};

export const updateLocation = (lat, lon) => ({
  type: UPDATE_LOCATION,
  lat,
  lon,
});

export const getMyLocation = (town) => async (dispatch) => {
  const response = await getLocationCoordinates(town);
  const pos = response.Point.pos.split(' ');
  console.log(response);
  dispatch(updateLocation(pos[1], pos[0]));
};

export default mapReducer;
