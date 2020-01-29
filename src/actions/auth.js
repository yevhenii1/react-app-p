import * as types from '../constants/auth'
import history from '../utils/history'
import {autAPI} from "../utils/api";

export const logIn = ({email, password}) => async dispatch => {
    try {
        dispatch({
            type: types.AUTH_REQUEST,
            payload: {request: false,}
        })
        const r = await autAPI.logIn(email, password)
        if (r.data.status === 'ok') {
            const id = r.data.data.id
            localStorage.setItem('id', id)
            dispatch({
                type: types.AUTH_SUCCESS,
                id: r.data.data.id,
            })
            history.push('/profile')
        } else {
            dispatch ({
                type: types.AUTH_FAILURE,
                error_message: r.data.message === 'wrong_email_or_password'
                ? 'Неправильный  email или password'
                :  r.data.message
            })
        }
    } catch (err) {
        dispatch ({
            type: types.AUTH_FAILURE,
             error_message: 'error server'
        })
    }
}

export const signOut = () => dispatch => {
    localStorage.removeItem('id')
    dispatch({
        type: types.AUTH_SIGNOUT,
        payload: {
            request: false
        }
    })
    history.push('/')
}