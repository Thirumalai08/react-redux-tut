const { FETCH_CAKES_REQUEST, FETCH_CAKES_FAILURE, FETCH_CAKES_SUCCESS, DELETE_CAKES, ADD_CAKES, ADD_CAKES_REQUEST, ADD_CAKES_SUCCESS, ADD_CAKES_FAILURE } = require("./cakeTypes")

const initialState = {
    loading: false,
    cakes: [],
    error: ''
}

const cakeReducer = (state=initialState,action) => {
    switch(action.type){
        case FETCH_CAKES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_CAKES_SUCCESS:
            return {
                loading: false,
                cakes: action.payload,
                error: ''
            }
        case FETCH_CAKES_FAILURE:
            return {
                loading: false,
                cakes: [],
                error: action.payload
            }
        case DELETE_CAKES:
            return {
                ...state, 
                cakes: state.cakes.filter((cake) => cake._id !== action.payload)
            }
        case ADD_CAKES_REQUEST:
            return {
                loading: true
            }
        case ADD_CAKES_SUCCESS:
            return {
                loading: true,
                cakes: action.payload
            }
        case ADD_CAKES_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default: return state
    }
}
export default cakeReducer