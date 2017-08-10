const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **
const setExperiences = experiences => {
    return { 
        type: 'CREATE_EXPERIENCE',
        experiences
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
