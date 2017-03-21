/**
 * Created by Maple on 17/3/7.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List/';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionSearch from 'material-ui/svg-icons/action/search';
import { Link } from 'react-router';

const style = {
    sidebarDiv: {
        fontFamily: 'Roboto, sans-serif',

        MozUserSelect: 'none',
        WebkitUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',

        height: '100%',
        overflowY: 'auto'
    },
    paper: {
        overflow: "auto",
        borderRadius: 0,
        height: '100%'
    },
    //TODO 点击后增加border
    listItem: {
        textAlign: 'center',
        // transition: 'all 450ms',
        // borderLeftStyle: 'solid',
        // borderColor: 'rgb(3, 169, 244)'
    }
};

export default class Sidebar extends React.Component {

    render() {
        return (
            <div
                style={style.sidebarDiv}
                className="sidebar"
            >
                <Paper style={style.paper}>
                    <List>
                        <ListItem
                            primaryText="主页"
                            leftIcon={<ActionHome />}
                            containerElement={<Link to="/"/>}
                        />
                        <ListItem
                            primaryText="搜索"
                            leftIcon={<ActionSearch />}
                        />
                        <Divider/>
                        <Subheader>发现</Subheader>
                        <ListItem
                            style={style.listItem}
                            primaryText="正在热映"
                        />
                        <ListItem
                            style={style.listItem}
                            primaryText="即将上映"
                        />
                        <ListItem
                            style={style.listItem}
                            primaryText="探索发现"
                            containerElement={<Link to="/explore"/>}
                        />
                        <Subheader>收藏</Subheader>
                        <ListItem
                            style={style.listItem}
                            primaryText="在看"
                        />
                        <ListItem
                            style={style.listItem}
                            primaryText="想看"
                        />
                        <ListItem
                            style={style.listItem}
                            primaryText="看过"
                        />
                    </List>
                </Paper>
            </div>
        )
    }
}