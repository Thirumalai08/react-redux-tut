import Axios from 'axios'
import {FETCH_ICECREAMS_REQUEST,FETCH_ICECREAMS_SUCCESS,FETCH_ICECREAMS_FAILURE,DELETE_ICECREAMS, ADD_ICECREAMS_REQUEST, ADD_ICECREAMS_SUCCESS, ADD_ICECREAMS_FAILURE} from './icecreamTypes'

const URL = 'https://crudcrud.com/api/f9fac7ff8c2b4b7f939daae8fa79b606/icecreams'

export const fetchIcecreamsRequest = () => {
    return {
        type: FETCH_ICECREAMS_REQUEST
    }
}

export const fetchIcecreamsSuccess = (icecreams) => {
    return {
        type: FETCH_ICECREAMS_SUCCESS,
        payload: icecreams
    }
}

export const fetchIcecreamsFailure = (error) => {
    return {
        type: FETCH_ICECREAMS_FAILURE,
        payload: error
    }
}

export const deleteIcecreamsSuccess = (icecream) => {  
    return {
        type:DELETE_ICECREAMS,
        payload: icecream._id
    }
}

export const addIcecreamsRequest = (name,price,flavor) => {
    return {
        type: ADD_ICECREAMS_REQUEST,
        payload: {name,price,flavor}
    }
}

export const addIcecreamsSuccess = (data) => {
    return {
        type: ADD_ICECREAMS_SUCCESS,
        payload: data
    }
}

export const addIcecreamsFailure = (error) => {
    return {
        type: ADD_ICECREAMS_FAILURE,
        payload: error
    }
}

export const fetchIcecreams = () => {
    return (dispatch) => {
        dispatch(fetchIcecreamsRequest)
        Axios.get(`${URL}`)
        .then(res=>{
            const icecreams = res.data
            console.log(icecreams)
            dispatch(fetchIcecreamsSuccess(icecreams))
        })
        .catch(err=>{
            const errorMsg = err.message
            dispatch(fetchIcecreamsFailure(errorMsg))
        })
    }
}

export const deleteIcecreams = (icecream) => { 
    return (dispatch) => {
        Axios.delete(`${URL}/${icecream._id}`) 
        .then(res=>{
            console.log(res.data)
            dispatch(deleteIcecreamsSuccess(icecream))
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

export const registerIcecreams = (name,price,flavor) => {
    return async (dispatch) => {
        dispatch(addIcecreamsRequest(name,price,flavor))
        try {
            const {data} = await Axios.post(`${URL}`,{name,price,flavor})
            dispatch(addIcecreamsSuccess(data)) 
        } catch(error) {
            const err = error.message
            dispatch(addIcecreamsFailure(err))
        }
    }
}