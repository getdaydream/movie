/**
 * Created by Maple on 17/3/21.
 */
import React from 'react';
import { connect } from 'react-redux';
import Selector from '../Selector';
import { selectDefaultQuery, fetchMovieData } from '../../redux/actions/SelectorActions'

class SelectorContainer extends React.Component {
    render() {
        return <Selector {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        $selectedDefaultQuery: state.get('selectedDefaultQuery'),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectDefaultQuery: (key, value) => dispatch(selectDefaultQuery(key, value)),
        fetchMovieData: () => dispatch(fetchMovieData())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectorContainer)