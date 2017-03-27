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
import { Link, IndexLink } from 'react-router';
import style from './Sidebar.css';

export default class Sidebar extends React.Component {

    render() {
        return (
            <div
                className={style.root}
            >
                <Paper style={{
                    overflow: "auto",
                    borderRadius: 0,
                    height: '100%'
                }}>
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
                </Paper>
            </div>
        )
    }
}