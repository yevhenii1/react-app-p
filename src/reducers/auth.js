import * as axios from 'axios'
import history from '../utils/history'
const AUTH_SUCCESS = 'AUTH_SUCCESS'

const initialState = {
    request: false,
    status: false,
    message: '',

}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                request: action.payload.request,
                status: action.payload.status,
            }
        default:
            return state
    }
}

export const logIn = (username, password) => dispatch => {

    axios.post(`https://mysterious-reef-29460.herokuapp.com/api/v1/validate`, {username, password})
        .then((r) => {
        // debugger
            if(r.status === 200){
                dispatch({
                    type: AUTH_SUCCESS,
                    payload: {
                        status: r.status
                    }
                })
            }
            console.log(r.status)
            // history.push('/profile')
        })
}


export default auth