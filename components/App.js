/**
 * Created by Maple on 17/3/5.
 */
import React from 'react';
import Toolbar from './Topbar';
import Sidebar from './Sidebar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

const style = {
    rightContentDiv : {
        webkitBoxSizing: 'border-box',
        mozBoxSizing: 'border-box',
        boxSizing: 'border-box',
        position: 'absolute',
        top: 56,
        left: 150,
        bottom: 0,
        overflowY: 'hidden',
    }
};

export default class App extends React.Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <div style={style.div}>
                    <Toolbar/>
                    <Sidebar />
                    <div style={style.rightContentDiv}>
                        {this.props.children}
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}