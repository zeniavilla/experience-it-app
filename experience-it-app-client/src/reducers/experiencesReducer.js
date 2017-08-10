export const experiencesReducer = (state = [], action) => {
    switch(action.type) {
        case 'CREATE_EXPERIENCE':
            return action.experiences;
        
        default:
            return state;
    }
}