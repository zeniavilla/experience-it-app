import { combineReducers } from 'redux';
import { experiencesReducer } from './experiencesReducer';
import { experienceFormData } from './experienceFormData';
import { currentExperienceReducer } from './currentExperienceReducer';

export default combineReducers({ 
    experiences: experiencesReducer, 
    experienceFormData: experienceFormData, 
    currentExperience: currentExperienceReducer 
});