/**
 * Created by Maple on 17/3/28.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import SelectorContainer from './containers/SelectorContainer';
import style from './Header.css';

const inlineStyle = {
    appBar: {
        position: 'fixed',
        top: 0,
        paddingLeft: '140px',
        backgroundColor: '#fff'
    }
};

export default class Header extends React.Component {

    render() {
        return (
            <AppBar style={inlineStyle.appBar}>
                <div className={style.contentContainer}>
                    <SelectorContainer/>
                </div>
            </AppBar>
        )
    }
}