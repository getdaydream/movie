/**
 * Created by Maple on 17/3/5.
 */
import React from 'react';
import Sidebar from './Sidebar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import style from './App.css';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div className={style.root}>
                        <div className={style.flexBox}>
                            <div className={style.sidebar}>
                                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                                    <Sidebar/>
                                </MuiThemeProvider>
                            </div>
                            <div className={style.content}>
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}