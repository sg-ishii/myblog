
const SELECTED_FILTER = 'SELECTED_FILTER'
const NOT_SELECTED = 'NOT_SELECTED'

const initialState = { filted: false }

export default function postListReducer (state=initialState, action) {
    if (action.type === SELECTED_FILTER) {
        const filted = true
        return {
            ...state,
            filted
        }
    } else if (action.type === NOT_SELECTED) {
        const filted = false
        return {
            ...state,
            filted
        }
    }
    return state
}

export const not_read = value => {
    return {
        type: value
    };
}