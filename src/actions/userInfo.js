import * as types from '../constants/userInfo'
import {userInfoAPI} from "../utils/api";


export const getUserInfo = () => async dispatch =>{
    try {
        dispatch ({
            type: types.USER_INFO_REQUEST,
            request: false,
        })
        const r = await userInfoAPI.userInfo()
        if(r.data.status === 'ok') {
            dispatch ({
                type: types.USER_INFO_SUCCESS,
                payload: {
                    userId: r.data.data.userId,
                    city: r.data.data.city,
                    languages: r.data.data.languages,
                    social: r.data.data.social,
                }
            })
        }else {
            dispatch ({
                type: types.USER_INFO_FAILURE,
                error_message: r.data.message === 'user_not_found'
                    ? 'user not found'
                    :  r.data.message
            })
        }
    } catch (err) {
        dispatch ({
            type: types.USER_INFO_FAILURE,
            error_message: 'error server'
        })
    }
}