import Axios from 'axios'
import {FETCH_CAKES_REQUEST,FETCH_CAKES_SUCCESS,FETCH_CAKES_FAILURE, DELETE_CAKES, ADD_CAKES_REQUEST, ADD_CAKES_SUCCESS,ADD_CAKES_FAILURE} from './cakeTypes'

const URL = 'https://crudcrud.com/api/f9fac7ff8c2b4b7f939daae8fa79b606/cakes'

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

/*export const addCakesSuccess = (newCake) => { 
    return {
        type: ADD_CAKES,
        payload: newCake
    }
}*/

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

/*export const addCakes = (name,price,flavor) => {
    const newCake = {name,price,flavor}
    return (dispatch) => {
        Axios.post(`${URL}`,newCake)
        .then(res=>{
            console.log(res.data)
            dispatch(addCakesSuccess(newCake))
        })
        .catch(err=>{
            console.log(err)
        })
    }
}*/

export const addCakes = (name,price,flavor) => async (dispatch) => {
    dispatch({
        type: ADD_CAKES_REQUEST,
        payload: {name,price,flavor}
    })
    try {
        const {data} = await Axios.post(`${URL}`,{name,price,flavor})
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