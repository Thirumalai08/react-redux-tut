export default (cakes=[],action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            return [...cakes,action.payload]
        case 'DELETE':
            return cakes.filter((cake)=>cake._id !== action.payload)
        case 'UPDATE':
            return cakes.map((cake)=>cake._id === action.payload._id ? action.payload : cake)
       default:
           return cakes
    }
}
/*const initialState = { cakes:[] }

const cakeReducer = (state=initialState,action) => {
    switch(action.type){
        case 'FETCH_ALL':
            return {...state}
        default:
            return state
    }
}
export default cakeReducer*/