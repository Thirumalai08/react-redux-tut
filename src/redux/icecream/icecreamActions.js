import Axios from 'axios'
import {FETCH_ICECREAMS_REQUEST,FETCH_ICECREAMS_SUCCESS,FETCH_ICECREAMS_FAILURE} from './icecreamTypes'

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

export const fetchIcecreams = () => {
    return (dispatch) => {
        dispatch(fetchIcecreamsRequest)
        Axios.get('https://crudcrud.com/api/3f513b1def5440cea605bba7d050f7d9/icecreams')
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