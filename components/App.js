/**
 * Created by Maple on 17/3/5.
 */
import React from 'react';
import Drawer from './Drawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import style from './App.css';

export default class App extends React.Component {

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <div className={style.main}>
                        {this.props.children}
                    </div>
                    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                        <Drawer/>
                    </MuiThemeProvider>
                </div>
            </MuiThemeProvider>
        )
    }
}