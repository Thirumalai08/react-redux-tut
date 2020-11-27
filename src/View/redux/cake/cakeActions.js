import Axios from 'axios'
import { ADD_CAKES_FAILURE, ADD_CAKES_REQUEST, ADD_CAKES_SUCCESS, FETCH_CAKES_FAILURE, FETCH_CAKES_REQUEST, FETCH_CAKES_SUCCESS } from './cakeTypes'

const URL = 'https://crudcrud.com/api/bafcb66c121e43aa997c625c96284719/cakes'

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
        dispatch(fetchCakesRequest())
        Axios.get(`${URL}`)
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

/*export const fetchCakes = () => {
    return async(dispatch) => {
        dispatch(fetchCakesRequest)
        try {
            const { cakes } = await Axios.get(`${URL}`)
            dispatch(fetchCakesSuccess(cakes))
        }
        catch(err){
            const errorMsg = err.message
            dispatch(fetchCakesFailure(errorMsg))
        }
    }
}*/

export const addNewCakes = (name,price,flavor) => async(dispatch) => {
    dispatch({
        type: ADD_CAKES_REQUEST,
        payload: {name,price,flavor}
    })
    try {
        const { data } = await Axios.post(`${URL}`,{name,price,flavor})
        dispatch({
            type: ADD_CAKES_SUCCESS,
            payload: data
        })
    } catch(error) {
        dispatch({
            type: ADD_CAKES_FAILURE,
            payload: error.message
        })
    }
}