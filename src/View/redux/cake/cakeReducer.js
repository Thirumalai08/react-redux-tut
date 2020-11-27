import {ADD_CAKES_FAILURE, ADD_CAKES_REQUEST, ADD_CAKES_SUCCESS, FETCH_CAKES_FAILURE, FETCH_CAKES_REQUEST, FETCH_CAKES_SUCCESS} from './cakeTypes'

/**/const initialState = {
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
                loading:false,
                cakes:action.payload,
                error:''
            }
        case FETCH_CAKES_FAILURE:
            return {
                loading:false,
                cakes:[],
                error:action.payload
            }

        case ADD_CAKES_REQUEST:
            return { loading:true }
        case ADD_CAKES_SUCCESS:
            return { loading:true, cakes:action.payload }
        case ADD_CAKES_FAILURE:
            return { loading:false, error:action.payload }
        
        default:
            return state
    }
}
export default cakeReducer