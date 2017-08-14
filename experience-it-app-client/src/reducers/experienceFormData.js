const initialState = {
    name: '',
    category: 'arts',
    location: '',
    time: '',
    recommended_times: 'anytime',
    img_url: ''
}

export const experienceFormData = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATED_DATA':
            return action.experienceFormData
        case 'RESET_EXPERIENCE_FORM':
            return initialState
        default:
            return state;
    }
}