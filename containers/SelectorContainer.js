/**
 * Created by Maple on 17/3/21.
 */
import React from 'react';
import { connect } from 'react-redux';
import Selector from '../components/Selector';
import { changeDefaultTag } from '../redux/actions/index'

class SelectorContainer extends React.Component {
    render() {
        return <Selector {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        tags: state.get('tags')
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectedTagChanged: (index, tag) => dispatch(changeDefaultTag(index, tag))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectorContainer)