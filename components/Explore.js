/**
 * Created by Maple on 17/3/13.
 */
import React from 'react';
import SelectorContainer from './containers/SelectorContainer';
import MovieCardGridContainer from './containers/MovieCardGridContainer';

const style = {
    mainDiv: {
        position: 'relative',
        width: '100%'
    },
    selectorDiv: {
        position: 'relative',
        top: '6px',
        margin: '6px 12px 12px'
    },
    CardGridWrapperDiv: {
        width: '100%'
    },
    CardGridDiv: {
        width: 'fit-content',
        margin: 'auto',

        display: '-webkit-flex',
        flexFlow: 'row wrap',
        justifyContent: 'center'
    }
};

export default class Explore extends React.Component {

    componentDidMount() {

    }

    //TODO conditional rendering
    render() {
        return (
            <div style={style.mainDiv}>
                <div style={style.selectorDiv}>
                    <SelectorContainer/>
                </div>
                <div style={style.CardGridWrapperDiv}>
                    <div style={style.CardGridDiv}>
                       <MovieCardGridContainer/>
                    </div>
                </div>
            </div>
        )
    }
}