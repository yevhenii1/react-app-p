import { combineReducers } from 'redux'
import auth from './auth'
import userInfo from './userInfo'
import { reducer as formReducer } from "redux-form";

export default combineReducers ({
    form: formReducer,
    auth,
    userInfo,

})