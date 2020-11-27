import {
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS
} from './userTypes'
import Axios from 'axios'
const URL = 'https://crudcrud.com/api/f9fac7ff8c2b4b7f939daae8fa79b606/cakes'
export const register = (name, email) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { name, email  } });
    try {
      const { data } = await Axios.post(`${URL}`, {
        name,
        email,
      });
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };