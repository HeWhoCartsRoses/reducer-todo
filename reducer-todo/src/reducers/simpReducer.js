export const initState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
};
export const simpRed = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                completed: !state.completed
            };
        case 'UPDATE_COMPLETED':
            return {
                ...state,
                title: action.payload,
                completed: false
            };
        default:
            return state;
    }

};