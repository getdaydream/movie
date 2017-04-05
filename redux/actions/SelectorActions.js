/**
 * Created by Maple on 17/3/22.
 */
import * as ActionTypes from '../../constants/ActionTypes';

export const selectSuggestQuery = (key, value) => {
    return {
        type: ActionTypes.SELECT_SUGGEST_QUERY,
        key,
        value
    }
};

export const resetSuggestQuery = () => {
    return {
        type: ActionTypes.RESET_SUGGEST_QUERY
    }
};

export const selectMovie = (id) => {
    return {
        type: ActionTypes.SELECT_MOVIE,
        id
    }
};

export const requestMovieData = () => {
    return {
        type: ActionTypes.REQUEST_MOVIE_DATA,
    }
};

export const receiveMovieData = (json) => {
    return {
        type: ActionTypes.RECEIVE_MOVIE_DATA,
        json
    }
};

const getRequestUrl = (state) => {
    let movieQuery = '';

    state.get('selectedSuggestQuery').forEach((value, key) => {
        if (value !== '全部') {
            movieQuery += key + '=' + value + '&'
        }
    });

    console.log(movieQuery);
    return movieQuery;
};

export const fetchMovieData = () => {
    return (dispatch, getState) => {

        dispatch(requestMovieData());

        const movieQuery = getRequestUrl(getState());
        const url = 'http://localhost:3000/douban?' + movieQuery;


        return fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                dispatch(receiveMovieData(json))
            })
    }
};

//TODO 优化刷新时的行为
// export const shouldFetchMovieData =($state) => {
//     return !$state.get('movieData').get('isFetching');
// };
//
// export const fetchMovieDataIfNeeded = () => {
//     return (dispatch, getState) => {
//         if (shouldFetchMovieData(getState())) {
//             return dispatch(fetchMovieData())
//         }
//     }
// };
