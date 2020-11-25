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
        Axios.get('https://crudcrud.com/api/3f513b1def5440cea605bba7d050f7d9/cakes')
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