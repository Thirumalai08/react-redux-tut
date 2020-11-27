import Axios from 'axios'
import { ADD_CAKES_FAILURE, ADD_CAKES_REQUEST, ADD_CAKES_SUCCESS, DELETE_CAKES_SUCCESS, FETCH_CAKES_FAILURE, FETCH_CAKES_REQUEST, FETCH_CAKES_SUCCESS } from './cakeTypes'

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
    return async(dispatch) => {
        dispatch(fetchCakesRequest())
        await Axios.get(`${URL}`)
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

export const deleteCakesSuccess = (cake) => {
    return {
        type: DELETE_CAKES_SUCCESS,
        payload: cake._id
    }
}

export const deleteCakes = (cake) => {
    return async(dispatch) => {
        await Axios.delete(`${URL}/${cake._id}`)
        .then(res=>{
            console.log(res.data)
            dispatch(deleteCakesSuccess(cake))
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

export const addCakesRequest = (name,price,flavor) => {
    return {
        type: ADD_CAKES_REQUEST,
        payload: {name,price,flavor}
    }
}
export const addCakesSuccess = (data) => {
    return {
        type: ADD_CAKES_SUCCESS,
        payload: data
    }
}
export const addCakesFailure = (error) => {
    return {
        type: ADD_CAKES_FAILURE,
        payload: error
    }
}
export const addNewCakes = (name,price,flavor) => {
    return async(dispatch) => {
        dispatch(addCakesRequest(name,price,flavor))
        try {
            const {data} = await Axios.post(`${URL}`,{name,price,flavor})
            dispatch(addCakesSuccess(data))
        }
        catch(error){
            const errorMsg = error.message
            dispatch(addCakesFailure(errorMsg))
        }
    }
}
/*export const addNewCakes = (name,price,flavor) => async(dispatch) => {
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
}*/