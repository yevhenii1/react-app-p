import * as types from '../constants/userInfo'
import userInfo, {initialState} from './userInfo'

describe('user info reducer', () => {
    it('USER_INFO_REQUEST', () => {
        const action = {
            type: types.USER_INFO_REQUEST
        }
        expect(userInfo(initialState, action)).toEqual({
            ...initialState,
            isLoading: true,
            request: undefined,
            userId: null,
            city: '',
            languages: [],
            social: [],
            error_message: '',
        })
    })
    it('USER_INFO_SUCCESS', () => {
        const action = {
            type: types.USER_INFO_SUCCESS,
            payload: {
                languages: [1, 2, 3],
                social: [1, 2, 3],
                city: 'Kiev',
            }
        }
        expect(userInfo(initialState, action)).toEqual({
            ...initialState,
            isLoading: false,
            request: false,
            userId: undefined,
            city: action.payload.city,
            languages: action.payload.languages,
            social: action.payload.social,
            error_message: '',
        })
    })
    it('USER_INFO_FAILURE', () => {
        const action = {
            type: types.USER_INFO_FAILURE
        }
        expect(userInfo(initialState, action)).toEqual({
            ...initialState,
            isLoading: false,
        })
    })
})
