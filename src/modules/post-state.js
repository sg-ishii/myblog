
import axios from "axios"
import Cookies from 'universal-cookie';
import uuidv4 from 'uuid/v4'

const cookies = new Cookies();
const ALREADY_READ = 'ALREADY_READ'
const ADD_FUNC_URL = 'https://api.sg-ishii.page'

axios.reques

const initialState = { reads: [] }

export default function postReducer (state=initialState, action) {
    if (action.type === ALREADY_READ) {
        if (!state.reads.includes(action.slugId)) {
            addFunc(action.slugId)
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

const addFunc = (slugId) => {

    const uuid = cookies.get('uuid') ? cookies.get('uuid') : uuidv4()

    const params = new URLSearchParams()
    params.append('uuid', uuid)
    params.append('slag',slugId)
    axios.post(ADD_FUNC_URL, params)
    .then(res => {
        console.log('success')
    })
    .catch(e => {
        console.log(e)
        cookies.set('uuid', uuid)
    })
}

export const already_read = (slugId) => {
    return {
        type: ALREADY_READ,
        slugId: slugId
    };
}