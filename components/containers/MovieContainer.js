/**
 * Created by Maple on 17/3/29.
 */
import React from 'react';
import { connect } from 'react-redux';
import Movie from '../Movie';

class MovieContainer extends React.Component {
    render() {
        return (
            <Movie {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.get('movieData').get('movie')
    }
};

export default connect(
    mapStateToProps
)(MovieContainer)