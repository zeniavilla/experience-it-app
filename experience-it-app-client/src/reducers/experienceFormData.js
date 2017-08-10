const initialState = {
    name: '',
    category: '',
    location: '',
    time: '',
    recommended_times: '',
    img_url: ''
}

export const experienceFormData = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATED_DATA':
            return action.experienceFormData
        default:
            return state;
    }
}