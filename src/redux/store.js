import { createStore, combineReducers, applyMiddleware } from 'redux';
import mapReducer from './mapReducer';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
  map: mapReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
