const compare = (a, b) => {
    if (a.id < b.id) {
        return -1;
    } else if (a.id > b.id) {
        return 1;
    } else {
        return 0;
    }
}

export const experiencesReducer = (state = [], action) => {
    switch(action.type) {

        case 'GET_EXPERIENCES':
            return (action.experiences).sort(compare);

        case 'CREATE_EXPERIENCE':
            return state.concat(action.experience);

        default:
            return state;
            
    }
}