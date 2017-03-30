/**
 * Created by Maple on 17/3/25.
 */
import React from 'react';
import { connect } from 'react-redux';
import MovieCardGrid from '../MovieCardGrid';
import { selectMovie } from '../../redux/actions/SelectorActions';

class MovieCardGridContainer extends React.Component {
    render() {
        return <MovieCardGrid {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.get('movieData').get('items')
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectMovie: (id) => dispatch(selectMovie(id))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieCardGridContainer)