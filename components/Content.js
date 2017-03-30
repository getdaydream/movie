/**
 * Created by Maple on 17/3/30.
 */
import React from 'react';
import AppBar from 'material-ui/Toolbar';

import style from './Content.css';

const inlineStyle = {
    appBar: {
        position: 'fixed',
        top: 0,
        left: '140px',
        right: 0,
        boxSizing: 'border-box',
        height: '64px',
        borderBottom: '1px solid #EEE',
        zIndex: 1300,
        backgroundColor: '#fff',
        display: '-webkit-flex',
        alignItems: 'center'
    }
};

export default class Content extends React.Component {

    render() {
        const {
            barContent,
            mainContent
        } = this.props;

        return (
            <div>
                <AppBar style={inlineStyle.appBar}>
                    {barContent}
                </AppBar>
                <div className={style.content}>
                    {mainContent}
                </div>
            </div>
        )
    }
}