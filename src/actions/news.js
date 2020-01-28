import * as axios from 'axios'
import * as types from '../constants/news'

export const getNews = () => async dispatch => {
    try {
        dispatch({
            type: types.NEWS_REQUEST,
            request: false,
        })
        const r = await axios({
            method: 'GET',
            url: 'https://mysterious-reef-29460.herokuapp.com/api/v1/news'
        })

        if(r.data.status === 'ok'){
            dispatch({
                type: types.NEWS_SUCCESS,
                newsList: r.data.data,
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
            error_message: 'server error'
        })
    }
}