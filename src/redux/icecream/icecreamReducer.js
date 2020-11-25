import {FETCH_ICECREAMS_REQUEST,FETCH_ICECREAMS_SUCCESS,FETCH_ICECREAMS_FAILURE} from './icecreamTypes'

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
        default: return state
    }
}

export default icecreamReducer