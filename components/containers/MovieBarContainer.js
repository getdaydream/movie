/**
 * Created by Maple on 17/3/30.
 */
import React from 'react';
import { connect } from 'react-redux';
import MovieBar from '../MovieBar';

class MovieBarContainer extends React.Component {
    render() {
        return <MovieBar {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.get('movieData').get('movie').get('id'),
        title: state.get('movieData').get('movie').get('title'),
        year: state.get('movieData').get('movie').get('year'),
        rating: state.get('movieData').get('movie').get('rating_data').get('rating'),
        rating_count: state.get('movieData').get('movie').get('rating_data').get('rating_count')
    }
};

export default connect(mapStateToProps)(MovieBarContainer);