import { createStore } from 'redux';
import AppReducer from '../reducers/Reducer';

const store = createStore(AppReducer);

export default store;