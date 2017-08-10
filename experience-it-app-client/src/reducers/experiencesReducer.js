export const experiencesReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_EXPERIENCES':
            return action.experiences;
        case 'CREATE_EXPERIENCE':
            return state.concat(action.experience);
        default:
            return state;
    }
}