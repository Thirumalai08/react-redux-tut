import Axios from 'axios'
import {FETCH_CAKES_REQUEST,FETCH_CAKES_SUCCESS,FETCH_CAKES_FAILURE} from './cakeTypes'

export const fetchCakesRequest = () => {
    return {
        type: FETCH_CAKES_REQUEST
    }
}

export const fetchCakesSuccess = (cakes) => {
    return {
        type: FETCH_CAKES_SUCCESS,
        payload: cakes
    }
}

export const fetchCakesFailure = (error) => {
    return {
        type: FETCH_CAKES_FAILURE,
        payload: error
    }
}

export const fetchCakes = () => {
    return (dispatch) => {
        dispatch(fetchCakesRequest)
        Axios.get('https://crudcrud.com/api/8e341c5a2bd34221bc869793f7ecf756/cake')
        .then(res=>{
            const cakes = res.data
            console.log(cakes)
            dispatch(fetchCakesSuccess(cakes))
        })
        .catch(err=>{
            const errorMsg = err.message
            dispatch(fetchCakesFailure(errorMsg))
        })
    }
}