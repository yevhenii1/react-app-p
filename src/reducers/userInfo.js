import * as types from '../constants/userInfo'


const initialState = {
    request: false,
    userId: null,
    city: '',
    languages: [],
    social: [],
    error_message: '',
}

const userInfo = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case types.USER_INFO_REQUEST:
            return {
                ...state,
                request: action.request,
            }
        case types.USER_INFO_SUCCESS:
            return {
                ...state,
                userId: action.payload.userId,
                city: action.payload.city,
                languages: action.payload.languages,
                social: action.payload.social,
            }
        case types.USER_INFO_FAILURE:
        default:
            return state
    }
}

export default userInfo