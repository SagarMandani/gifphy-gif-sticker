
import { combineReducers } from 'redux';
import gifReducer from './gifReducer';

import * as types from '../actions/types';

const appReducer = combineReducers({
    gif: gifReducer
});


const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer;