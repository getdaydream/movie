/**
 * Created by Maple on 17/4/15.
 */
import * as ActionTypes from '../../constants/ActionTypes';

import { Map, List } from 'immutable';

export const myMovieData = (state = Map({
                               items: List(),
                               isFetching: false,
                            }), action) => {

    switch (action.type) {
        case ActionTypes.REQUEST_MY_MOVIE_DATA:
        case ActionTypes.CHANGE_WATCH_STATUS:
            return state.set('isFetching', true);
            break;
        case ActionTypes.RECEIVE_MY_MOVIE_DATA:
            return state.set('items', List(action.json['items']))
                .set('isFetching', false);
            break;
        default:
            return state;
    }
};