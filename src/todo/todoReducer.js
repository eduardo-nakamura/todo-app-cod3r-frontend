const INITIAL_STATE = {
    description: 'eee',
    list: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, description: action.payload.data }
        default:
            return state
    }
}
