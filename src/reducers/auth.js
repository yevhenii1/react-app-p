import * as types from '../constants/auth'

const initialState = {
    request: false,
    id: null,
    isAuth: false,
}

const auth = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case types.AUTH_SUCCESS:
            return {
                ...state,
                request: action.payload.request,
                isAuth: true,
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