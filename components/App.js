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
    mainDiv: {
        display: '-webkit-flex',
        flexDirection: 'column',
        height: '100vh'
    },
    toolbarDiv: {
        flex: '0 0 auto'
    },
    bottomDiv : {
        height: '100%',
        flex: '1 1 auto',

        display: '-webkit-flex'
    },
    sidebarDiv: {
        width: '150px',
        flex: 'none',
    },
    contentDiv: {
        flex: '1 1 0%',
        width: '100%'
    }
};

export default class App extends React.Component {

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div style={style.mainDiv}>
                        <div style={style.toolbarDiv}>
                            <Toolbar/>
                        </div>
                        <div style={style.bottomDiv} >
                            <div style={style.sidebarDiv}>
                                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                                    <Sidebar/>
                                </MuiThemeProvider>
                            </div>
                            <div style={style.contentDiv}>
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>

        )
    }
}