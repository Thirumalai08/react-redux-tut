import {combineReducers} from 'redux'
//import cakeReducer from './cakeReducer'
import cake from './cakeReducer'
import icecream from './icecreamReducer'
export default combineReducers({
    cake, //here all the data will store regarding to the cake reducer
    icecream
})