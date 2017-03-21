/**
 * Created by Maple on 17/3/21.
 */
import { combineReducers } from 'redux';
import tags from '../reducers/tags';

const rootReducer = combineReducers({
    tags
});

export default rootReducer;