
const ALREADY_READ = 'ALREADY_READ';

const initialState = { reads: [] }

export default function postReducer (state=initialState, action) {
    if (action.type === ALREADY_READ) {
        if (!state.reads.includes(action.slugId)) {
            const reads = state.reads.concat(action.slugId,)
            return {
                ...state,
                reads
            }
        }
        return state
    }
    return state
}

export const already_read = slugId => {
    return {
        type: ALREADY_READ,
        slugId: slugId
    };
}