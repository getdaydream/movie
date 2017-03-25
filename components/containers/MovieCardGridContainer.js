/**
 * Created by Maple on 17/3/25.
 */
import React from 'react';
import { connect } from 'react-redux';
import MovieCardGrid from '../MovieCardGrid';

class MovieCardGridContainer extends React.Component {
    render() {
        return <MovieCardGrid {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.get('movieData').get('items'),
    };
};

export default connect(mapStateToProps)(MovieCardGridContainer)