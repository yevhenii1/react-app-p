import * as types from '../constants/news'

const initialState = {
    request: false,
    newsList: [],
    error_message: '',
    isLoading: false,
}

const news = (state = initialState, action) => {
    switch (action.type) {
        case types.NEWS_REQUEST:
            return {
                ...state,
                request: action.request,
                isLoading: true,
            }
        case types.NEWS_SUCCESS:
            return {
                ...state,
                newsList: action.newsList,
                isLoading: false,
            }

        case types.NEWS_FAILURE:
            return {
                ...state,
                error_message: action.error_message,
                isLoading: false,
            }
        default:
            return state
    }
}

export default news