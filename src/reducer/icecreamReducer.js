export default (icecreams=[],action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            return [...icecreams,action.payload]
        case 'DELETE':
            return icecreams.filter((icecream)=>icecream._id !== action.payload)
        case 'UPDATE':
            return icecreams.map((icecream)=>icecream._id === action.payload._id ? action.payload : icecream)
       default:
           return icecreams
    }
}