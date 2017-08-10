import { combineReducers } from 'redux';
import { experiencesReducer } from './experiences_reducer';

export default combineReducers({ experiences: experiencesReducer });