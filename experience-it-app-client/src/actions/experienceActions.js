import { resetExperienceForm } from './experienceFormActions';

const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **
const setExperiences = experiences => {
    return { 
        type: 'GET_EXPERIENCES',
        experiences
    }
}

const addExperience = experience => {
    return {
        type: 'CREATE_EXPERIENCE',
        experience
    }
}

// ** Async Action **
export const getExperiences = () => {
    return dispatch => {
        return fetch(`${API_URL}/experiences`)
            .then(response => response.json())
            .then(experiences => dispatch(setExperiences(experiences)))
            .catch(error => console.log(error));
    }
}

export const createExperience = experience => {
    return dispatch => {
        return fetch(`${API_URL}/experiences`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ experience: experience })
        })
            .then(response => response.json())
            .then(experience => {
                dispatch(addExperience(experience))
                dispatch(resetExperienceForm()) 
            })
            .catch(error => console.log(error))
    }
}