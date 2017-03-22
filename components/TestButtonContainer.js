/**
 * Created by Maple on 17/3/22.
 */
import React from 'react';
import { connect } from 'react-redux';
import TestButton from './TestButton';
import { clickButtonAndAdd } from '../redux/actions/index';

class TestButtonContainer extends React.Component {
    render() {
        return <TestButton {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.get('sum')
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClickAdd: () => dispatch(clickButtonAndAdd())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TestButtonContainer)