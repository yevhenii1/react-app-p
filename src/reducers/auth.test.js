import * as types from '../constants/auth'
import auth, {initialState} from './auth'

describe('auth reducer', () => {
   it('AUTH_REQUEST', () => {
       const action = {
           type: types.AUTH_REQUEST,
           payload: {
               request: false,
           }
       }
       expect(auth(initialState, action)).toEqual({
           ...initialState,
           request: action.payload.request,
           isAuth: false,
           id: null,
           error_message: '',
       })
   })
   it('AUTH_SUCCESS', () => {
       const action = {
           type: types.AUTH_SUCCESS,
           id: 2

       }
       expect(auth(initialState, action)).toEqual({
           ...initialState,
           request: false,
           isAuth: true,
           id: action.id,
           error_message: '',
       })
   })
   it('AUTH_FAILURE', () => {
       const action = {
           type: types.AUTH_FAILURE,
           error_message: 'error'

       }
       expect(auth(initialState, action)).toEqual({
           ...initialState,
           request: false,
           isAuth: false,
           id: null,
           error_message: action.error_message,
       })
   })
   it('AUTH_SIGNOUT', () => {
       const action = {
           type: types.AUTH_SIGNOUT,
       }
       expect(auth(initialState, action)).toEqual({
           ...initialState,
           request: false,
           isAuth: false,
           id: null,
           error_message: "",
       })
   })

})