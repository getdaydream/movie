/**
 * Created by Maple on 17/3/7.
 */
import React from 'react';
import ToolBar from 'material-ui/Toolbar';

const style = {
    toolBar: {
        backgroundColor: '#1976D2'
    }
};

export default class Topbar extends React.Component {

    render() {
        return (
            <ToolBar style={style.toolBar}>

            </ToolBar>
        )
    }
}