import { resetExperienceForm } from './experienceFormActions';

const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **
const setExperiences = experiences => {
    return { 
        type: 'GET_EXPERIENCES',
        experiences
    }
}

const setExperience = experience => {
    return {
        type: 'GET_EXPERIENCE_ITEM',
        experience
    }
}

const addExperience = experience => {
    return {
        type: 'CREATE_EXPERIENCE',
        experience
    }
}

const addLike = experience => {
    return {
        type: 'LIKE_EXPERIENCE',
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

export const getExperienceItem = experienceId => {
    return dispatch => {
        return fetch(`${API_URL}/experiences/${experienceId}`)
            .then(response => response.json())
            .then(experience => dispatch(setExperience(experience)))
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

export const likeExperience = experience => {
    const exp = experience;
    const expLikes = (exp.liked) ? exp.likes - 1 : exp.likes + 1;
    const newExperience = Object.assign({}, experience, {liked: !exp.liked, likes: (expLikes)} )
    
    return dispatch => {
        return fetch(`${API_URL}/experiences/${experience.id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ experience: newExperience })
        })
            .then(response => response.json())
            .then(experience => dispatch(addLike(experience)))
            .catch(error => console.log(error))
    }
}