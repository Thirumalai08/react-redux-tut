import { ADD_CAKES_FAILURE } from '../cake/cakeTypes'
import {FETCH_ICECREAMS_REQUEST,FETCH_ICECREAMS_SUCCESS,FETCH_ICECREAMS_FAILURE,DELETE_ICECREAMS, ADD_ICECREAMS_REQUEST, ADD_ICECREAMS_SUCCESS} from './icecreamTypes'

const initialState = {
    loading: false,
    icecreams: [],
    error: ''
}

const icecreamReducer = (state=initialState,action) => {
    switch(action.type){
        case FETCH_ICECREAMS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_ICECREAMS_SUCCESS:
            return {
                loading: false,
                icecreams: action.payload,
                error: ''
            }
        case FETCH_ICECREAMS_FAILURE:
            return {
                loading: false,
                icecreams: [],
                error: action.payload
            }
        case DELETE_ICECREAMS:
            return {
                ...state, 
                icecreams: state.icecreams.filter((icecream) => icecream._id !== action.payload)
            }
        case ADD_ICECREAMS_REQUEST:
            return { loading: true }
        case ADD_ICECREAMS_SUCCESS:
            return{ loading: false, icecreams: action.payload }
        case ADD_CAKES_FAILURE:
            return { loading:false, error: action.payload }
        default: return state
    }
}

export default icecreamReducer