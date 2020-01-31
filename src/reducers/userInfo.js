import * as types from '../constants/userInfo'


const initialState = {
    request: false,
    userId: null,
    city: '',
    languages: [],
    social: [],
    error_message: '',
    isLoading: false,
}

const userInfo = (state = initialState, action) => {
    switch (action.type) {
        case types.USER_INFO_REQUEST:
            return {
                ...state,
                request: action.request,
                isLoading: true,
            }
        case types.USER_INFO_SUCCESS:
            return {
                ...state,
                userId: action.payload.userId,
                city: action.payload.city,
                languages: action.payload.languages,
                social: action.payload.social,
                isLoading: false,
            }
        case types.USER_INFO_FAILURE:
            return {
                isLoading: false,
            }
        default:
            return state
    }
}

export default userInfo