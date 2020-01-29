import * as types from '../constants/news'


const initialState = {
    request: false,
    newsList: null,
    error_message: '',
}

const news = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case types.NEWS_REQUEST:
            return {
                ...state,
                request: action.request
            }
        case types.NEWS_SUCCESS:
            return {
                ...state,
                newsList: action.newsList,
            }

        case types.NEWS_FAILURE:
            return {
                ...state,
                error_message: action.error_message
            }
        default:
            return state
    }
}

export default news