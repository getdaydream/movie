/**
 * Created by Maple on 17/3/21.
 */
import React from 'react';
import { connect } from 'react-redux';
import Selector from '../Selector';
import { selectSuggestQuery, fetchMovieData } from '../../redux/actions/SelectorActions'

class SelectorContainer extends React.Component {
    render() {
        return <Selector {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        selectedSuggestQuery: state.get('selectedSuggestQuery'),
        pageIndex: state.get('movieData').get('pageIndex')
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectSuggestQuery: (key, value) => dispatch(selectSuggestQuery(key, value)),
        fetchMovieData: (pageIndex) => dispatch(fetchMovieData(pageIndex))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectorContainer)