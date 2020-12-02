import * as api from '../Api'

export const getCakes = () => async(dispatch) => {
    try {
        const {data} = await api.fetchCakes()
        dispatch({
            type: 'FETCH_ALL',
            payload: data
        })
    } catch(err) {
        console.log(err)
    }
}

export const addCake = (cake) => async(dispatch) => {
    try {
        const {data} = await api.createCake(cake)
        dispatch({
            type: 'CREATE',
            payload: data
        })
    } catch(err) {
        console.log(err)
    }
}

export const deleteCake = (id) => async(dispatch) => {
    try {
        await api.deleteCake(id)
        dispatch({
            type: 'DELETE',
            payload:id
        })
    } catch(err) {
        console.log(err)
    }
}

export const updateCake = (id,cake) => async(dispatch) => {
    try {
        const {data} = await api.updateCake(id,cake)
        console.log(data)
        dispatch({type: 'UPDATE',payload:data})
    } catch(error) {
        console.log(error.message)
    }
}