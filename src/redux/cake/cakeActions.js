import Axios from 'axios'
import {FETCH_CAKES_REQUEST,FETCH_CAKES_SUCCESS,FETCH_CAKES_FAILURE, DELETE_CAKES} from './cakeTypes'

const URL = 'https://crudcrud.com/api/574f3830664541319380e22106c25dfe/cakes'

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

export const deleteCakesSuccess = (cake) => {  
    return {
        type:DELETE_CAKES,
        payload: cake._id
    }
}

export const fetchCakes = () => {
    return (dispatch) => {
        dispatch(fetchCakesRequest)
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

export const deleteCakes = (cake) => { 
    return (dispatch) => {
        Axios.delete(`${URL}/${cake._id}`) 
        .then(res=>{
            console.log(res.data)
            dispatch(deleteCakesSuccess(cake))
        })
        .catch(err=>{
            console.log(err)
        })
    }
}