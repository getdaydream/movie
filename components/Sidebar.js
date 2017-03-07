/**
 * Created by Maple on 17/3/7.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const style = {
  paper: {
      display: 'inline-block',
      textAlign: 'center',
      top: 0,
      bottom: 0
  }
};


export default class Sidebar extends React.Component {

    render() {
        return (
        <Paper style={style.paper}>
            <Menu>
                <MenuItem primaryText="Maps"/>
                <MenuItem primaryText="Books"/>
                <MenuItem primaryText="Flights"/>
                <MenuItem primaryText="Apps"/>
            </Menu>
        </Paper>
        )
    }
}
