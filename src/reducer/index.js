import {combineReducers} from 'redux'
import cake from './cakeReducer'
import icecream from './icecreamReducer'
export default combineReducers({
    cake,
    icecream
})