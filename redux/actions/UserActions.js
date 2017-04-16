/**
 * Created by Maple on 17/4/15.
 */
import * as ActionTypes from '../../constants/ActionTypes';


// export const selectMovie = (id) => {
//     return {
//         type: ActionTypes.SELECT_MOVIE,
//         id
//     }
// };

export const requestMyMovieData = () => {
    return {
        type: ActionTypes.REQUEST_MY_MOVIE_DATA
    }
};

export const receiveMyMovieData = (json) => {
    return {
        type: ActionTypes.RECEIVE_MY_MOVIE_DATA,
        json
    }
};

export const getMyMovieData = (doubanId) => {
    return (dispatch) => {

        dispatch(requestMyMovieData());

        const url = `http://localhost:3000/user?id=${doubanId}`;

        console.log('haha');

        return fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                dispatch(receiveMyMovieData(json))
            })
    }
};

export const updateMyMovieData = (doubanId, updatedData) => {
    return (dispatch) => {

        dispatch(requestMyMovieData());

        const url = `http://localhost:3000/user?id=${doubanId}&${updatedData}`;


        return fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                dispatch(receiveMyMovieData(json))
            })
    }
};
