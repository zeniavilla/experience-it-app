import { combineReducers } from 'redux';
import { experiencesReducer } from './experiencesReducer';
import { experienceFormData } from './experienceFormData';

export default combineReducers({ experiences: experiencesReducer, experienceFormData: experienceFormData });