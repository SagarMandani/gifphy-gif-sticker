
import * as types from '../actions/types';

/*========================================================
     * function Name: gifReducer.js 
     * function Purpose: state management
     * function Parameters: state and action
     * function ReturnType: action type and payload
     * function Description: api calling response action type and set payload of state stored in gifReducer.js
     *=====================================================*/

const INITIAL_STATE = {
    gifLoading: false,
    gifList: [],
    gifError: null,
    gifMoreLoading: false,
    gifCurrentPage: 1,
    gifMaxPage: 1,
};

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.GET_GIF_LOADING:
            return { ...state, gifLoading: true };
        case types.GET_GIF_MORE_LOADING:
            return { ...state, gifMoreLoading: true };
        case types.GET_GIF_SUCCESS:
            return { ...state, gifList: action.payload, gifLoading: false, gifCurrentPage: action.currentPage, gifMaxPage: action.maxPage };
        case types.GET_GIF_MORE_SUCCESS:
            return { ...state, gifList: [...state.gifList, ...action.payload], gifMoreLoading: false, gifCurrentPage: action.currentPage };
        case types.GET_GIF_FAIL:
            return { ...state, gifError: action.payload, gifLoading: false, gifMoreLoading: false };
        default:
            return state;
    }
};