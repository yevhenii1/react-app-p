import * as axios from 'axios'
import * as types from '../constants/auth'

export const logIn = ({email, password}) => async dispatch => {
    const r = await axios({
        method: 'POST',
        url: 'https://mysterious-reef-29460.herokuapp.com/api/v1/validate',
        data: {
            email,
            password
        },
        headers: {
            'content-type': 'application/json'
        }
    })

    console.log(r)
    // debugger
    if (r.data.status === 'ok') {
        const id = r.data.data.id
        localStorage.setItem('id', id)
        dispatch({
            type: types.AUTH_SUCCESS,
            payload: {
                id: r.data.data.id
            }
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
}