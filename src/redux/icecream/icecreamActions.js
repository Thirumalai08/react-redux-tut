import Axios from 'axios'
import {FETCH_ICECREAMS_REQUEST,FETCH_ICECREAMS_SUCCESS,FETCH_ICECREAMS_FAILURE,DELETE_ICECREAMS} from './icecreamTypes'

const URL = 'https://crudcrud.com/api/574f3830664541319380e22106c25dfe/icecreams'

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