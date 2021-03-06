
import axios from "axios"
import Cookies from 'universal-cookie';
import uuidv4 from 'uuid/v4'
import firebase from 'firebase/app';
import 'firebase/firestore';

const cookies = new Cookies();
const ADD_FUNC_URL = 'https://api.sg-ishii.page'

const ALREADY_READ = 'ALREADY_READ'
const COMPLETE_INIT = 'COMPLETE_INIT'

firebase.initializeApp({
  apiKey: process.env.GATSBY_API_KEY,
  authDomain: process.env.GATSBY_AUTH_DOMAIN,
  projectId: process.env.GATSBY_PROJECT_ID
});

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
    } else if (action.type === COMPLETE_INIT) {
        const reads = state.reads.concat(action.reads)
        return {
            ...state,
            reads
        }
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
        cookies.set('uuid', uuid)
    })
    .catch(e => {
        console.log(e)
        cookies.set('uuid', uuid)
    })
}

export const getFunc = async () => {
    
    let result;

    try {
        const db = firebase.firestore();
    
        const uuid = cookies.get('uuid') ? cookies.get('uuid') : uuidv4()
        cookies.set('uuid', uuid)
        const ref = db.collection('reads').doc(uuid)

        const doc = await ref.get()
        if (doc.exists) {
            result = Object.keys(doc.data())
        } else {
            console.log('No such document!');
            result = []
        }
    } catch (e) {
        console.log("cannot access firestore")
        console.log(e)
        result = []
    }

    return result
}

export const already_read = (slugId) => {
    return {
        type: ALREADY_READ,
        slugId: slugId
    };
}

export const complete_init = (reads) => {
    return {
        type: COMPLETE_INIT,
        reads: reads
    };
}