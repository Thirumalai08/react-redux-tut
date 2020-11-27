import {combineReducers} from 'redux'
import cakeReducer from './cake/cakeReducer'
import icecreamReducer from './icecream/icecreamReducer'
import { userRegisterReducer } from './user/userReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer,
    userRegister:userRegisterReducer
})

export default rootReducer