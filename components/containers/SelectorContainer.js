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
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectSuggestQuery: (key, value) => dispatch(selectSuggestQuery(key, value)),
        fetchMovieData: () => dispatch(fetchMovieData())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectorContainer)