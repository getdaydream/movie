/**
 * Created by Maple on 17/4/15.
 */
import * as ActionTypes from '../../constants/ActionTypes';

import { Map, List } from 'immutable';

export const myMovieData = (state = Map({

                               isFetching: false
                            }), action) => {

    switch (action.type) {
        default:
            return state;
    }
};