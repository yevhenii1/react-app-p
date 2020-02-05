import * as types from '../constants/userInfo'


const initialState = {
    isLoading: false,
    request: false,
    userId: null,
    city: '',
    languages: [],
    social: [],
    error_message: '',

}

const userInfo = (state = initialState, action) => {
    switch (action.type) {
        case types.USER_INFO_REQUEST:
            return {
                ...state,
                isLoading: true,
                request: action.request,

            }
        case types.USER_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userId: action.payload.userId,
                city: action.payload.city,
                languages: action.payload.languages,
                social: action.payload.social,

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