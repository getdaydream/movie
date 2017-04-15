/**
 * Created by Maple on 17/4/15.
 */
import * as ActionTypes from '../../constants/ActionTypes';


export const selectMovie = (id) => {
    return {
        type: ActionTypes.SELECT_MOVIE,
        id
    }
};

export const requestMyMovieData = (pageIndex) => {
    return {
        type: ActionTypes.REQUEST_MY_MOVIE_DATA,
        pageIndex
    }
};

export const receiveMyMovieData = (json) => {
    return {
        type: ActionTypes.RECEIVE_MY_MOVIE_DATA,
        json
    }
};

const getRequestUrl = (state) => {
    let movieQuery = `pageIndex=${state.get('movieData').get('pageIndex')}&pageSize=${state.get('movieData').get('pageSize')}&`;

    state.get('selectedSuggestQuery').forEach((value, key) => {
        if (value !== '全部') {
            movieQuery += key + '=' + value + '&'
        }
    });

    console.log(movieQuery);
    return movieQuery;
};

export const fetchMyMovieData = (pageIndex) => {
    return (dispatch, getState) => {

        dispatch(requestMovieData(pageIndex));

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
