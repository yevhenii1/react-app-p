import * as types from '../constants/news'
import news, {initialState} from './news'

describe('news reducer', () => {
    it('NEWS_REQUEST', () => {

        const action = {
            type: types.NEWS_REQUEST
        }

        expect(news(initialState, action)).toEqual({
            ...initialState,
            request: undefined,
            newsList: [],
            error_message: '',
            isLoading: true,
        })
    })
    it('NEWS_SUCCESS', () => {
        const action = {
            type: types.NEWS_SUCCESS,
            payload: [1,2,3,4]
        }

        expect(news(initialState, action)).toEqual({
            ...initialState,
            isLoading: false,
            newsList: action.payload,
            error_message: '',
            request: false,
        })
    })
    it('NEWS_FAILURE', () => {
        const action = {
            type: types.NEWS_FAILURE,
            payload: {
                error_message: '500 error',
            }
        }
        expect(news(initialState, action)).toEqual({
            ...initialState,
            isLoading: false,
            request: false,
            newsList: [],
            error_message: action.payload.error_message,
        })
    })
})