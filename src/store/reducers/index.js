import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import history from '../history';
import common from './common';

const rootReducer = combineReducers({
    common,
    router: connectRouter(history)
});

export default rootReducer;