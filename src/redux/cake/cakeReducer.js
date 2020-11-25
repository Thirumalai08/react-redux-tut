const { FETCH_CAKES_REQUEST, FETCH_CAKES_FAILURE, FETCH_CAKES_SUCCESS, DELETE_CAKES } = require("./cakeTypes")

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
        
        default: return state
    }
}
export default cakeReducer