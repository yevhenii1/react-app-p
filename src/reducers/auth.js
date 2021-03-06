import * as types from '../constants/auth'

const id = localStorage.getItem('id')

const initialState = {
    request: false,
    id: id,
    isAuth: false,
    error_message: '',
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case types.AUTH_REQUEST:
            return {
                ...state,
                isAuth: false,
                request: action.payload.request,
            }
        case types.AUTH_SUCCESS:
            return {
                ...state,
                id: action.id,
                isAuth: true,
            }
        case types.AUTH_FAILURE:
            return {
                ...state,
                isAuth: false,
                error_message: action.error_message,
            }
        case types.AUTH_SIGNOUT:
            return {
                ...state,
                isAuth: false,
            }
        default:
            return state
    }
}



export default auth