/**
 * Created by Maple on 17/3/29.
 */
import React from 'react';
import { connect } from 'react-redux';
import Movie from '../Movie';
import { getMyMovieData, updateMyMovieData } from '../../redux/actions/UserActions';

class MovieContainer extends React.Component {
    render() {
        return (
            <Movie {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.get('movieData').get('movie'),
        myMovieData: state.get('myMovieData')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMyMovieData: (id) => dispatch(getMyMovieData(id)),
        updateMyMovieData: (id, updatedData) => dispatch(updateMyMovieData(id, updatedData))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieContainer)