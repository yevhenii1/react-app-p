import * as types from '../constants/news'
import {newsAPI} from "../utils/api";

export const getNews = () => async dispatch => {
    try {
        dispatch({
            type: types.NEWS_REQUEST,
            request: false,
        })
        const r = await newsAPI.news()
        if(r.data.status === 'ok'){
            dispatch({
                type: types.NEWS_SUCCESS,
                payload: r.data.data,
            })
        } else {
            dispatch({
                type: types.NEWS_FAILURE,
                error_message: 'server error'
            })
        }
    }catch (err) {
        dispatch({
            type: types.NEWS_FAILURE,
            payload: {
                error_message: 'server error'
            }
        })
    }
}