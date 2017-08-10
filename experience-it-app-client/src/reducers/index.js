import { combineReducers } from 'redux';
import { experiencesReducer } from './experiencesReducer';

export default combineReducers({ experiences: experiencesReducer });