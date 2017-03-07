/**
 * Created by Maple on 17/3/5.
 */
import React from 'react'
import Toolbar from './Topbar'
import Sidebar from './Sidebar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182
export default class App extends React.Component {

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Toolbar/>
                    <Sidebar />
                </div>
            </MuiThemeProvider>
        )
    }
}