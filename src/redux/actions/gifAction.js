import * as types from './types';
import { postRequestApi, getRequestApi } from '../../helper/axiosHelper';
import { Config, Constants, Utils } from '@common';

/*========================================================
     * function Name: authAction.js
     * function Purpose: method of action
     * function Parameters: api calling with Parameters
     * function ReturnType: dispatch method in redux
     * function Description: api calling using method of action in authAction.js
     *=====================================================*/

export const getSearchGif = async (dispatch, endpoint, currentGifType, search, currentPage) => {
    try {
        dispatch({ type: currentPage == 1 ? types.GET_GIF_LOADING : types.GET_GIF_MORE_LOADING });
        let url = '';
        if (currentGifType == 'gif') {
            url += "gifs/"
        } else if (currentGifType == 'sticker') {
            url += "stickers/"
        }
        let response;
        let limit = 25;
        let offset = currentPage * limit;
        if (endpoint == 'trading') {
            response = await getRequestApi(url + 'trending', {
                "api_key": Config.gifKey,
                "limit": limit,
                "rating": "pg",
                "offset": offset,
            });
        } else if (endpoint == 'search') {
            response = await getRequestApi(url + 'search', {
                "api_key": Config.gifKey,
                "q": search,
                "limit": limit,
                "rating": "pg",
                "offset": offset,
            });
        }
        if (response?.meta?.status == 200) {
            if (currentPage == 1) {
                var maxPage = Math.ceil(response.pagination.total_count / limit);
                dispatch({ type: types.GET_GIF_SUCCESS, payload: response?.data, currentPage, maxPage });
            } else {
                dispatch({ type: types.GET_GIF_MORE_SUCCESS, payload: response?.data, currentPage });
            }
        } else {
            dispatch({ type: types.GET_GIF_FAIL, payload: '' });
        }
    } catch (error) {
        dispatch({ type: types.GET_GIF_FAIL, payload: error });
    }
};