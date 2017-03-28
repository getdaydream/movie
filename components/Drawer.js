/**
 * Created by Maple on 17/3/7.
 */
import React from 'react';
import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List/';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionSearch from 'material-ui/svg-icons/action/search';
import { Link, IndexLink } from 'react-router';
import style from './Drawer.css';

const inlineStyle = {
    drawer: {
        position: 'fixed',
        top: 0,
        left: 0,
        boxSizing: 'border-box',
        zIndex: 1300
    }
};

export default class Sidebar extends React.Component {

    render() {
        return (
            <div className={style.root}>
                <Drawer
                    style={inlineStyle.drawer}
                    width={140}
                >
                    <a className={style.title}>
                        Movie
                    </a>

                    <List>
                        <ListItem
                            primaryText="主页"
                            leftIcon={<ActionHome />}
                            containerElement={<IndexLink to="/" activeStyle={{borderLeft: '5px solid #448AFF'}}/>}
                        />
                        <ListItem
                            primaryText="搜索"
                            leftIcon={<ActionSearch />}
                        />
                        <Divider/>
                        <Subheader>发现</Subheader>
                        <ListItem
                            primaryText="正在热映"
                        />
                        <ListItem
                            primaryText= '即将上映'
                        />
                        <ListItem
                            primaryText="探索发现"
                            containerElement={<Link to="explore" activeStyle={{borderLeft: '5px solid #448AFF'}}/>}
                        />
                        <Subheader>收藏</Subheader>
                        <ListItem
                            primaryText="在看"
                        />
                        <ListItem
                            primaryText="想看"
                        />
                        <ListItem
                            primaryText="看过"
                        />
                    </List>
                </Drawer>
            </div>
        )
    }
}