import * as api from '../Api'

export const getIcecreams = () => async(dispatch) => {
    try {
        const {data} = await api.fetchIcecreams()
        dispatch({
            type: 'FETCH_ALL',
            payload: data
        })
    } catch(err) {
        console.log(err)
    }
}

export const addIcecream = (icecream) => async(dispatch) => {
    try {
        const {data} = await api.createIcecream(icecream)
        dispatch({
            type: 'CREATE',
            payload: data
        })
    } catch(err) {
        console.log(err)
    }
}

export const deleteIcecream = (id) => async(dispatch) => {
    try {
        await api.deleteIcecream(id)
        dispatch({
            type: 'DELETE',
            payload:id
        })
    } catch(err) {
        console.log(err)
    }
}

export const updateIcecream = (id,icecream) => async(dispatch) => {
    try {
        const {data} = await api.updateIcecream(id,icecream)
        console.log(data)
        dispatch({type: 'UPDATE',payload:data})
    } catch(error) {
        console.log(error.message)
    }
}