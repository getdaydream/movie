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
import style from './Sidebar.css';

export default class Sidebar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            clickedItem: '主页'
        }

    }

    handleClick = (title) => {
        this.setState({
            clickedItem: title
        })
    };

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
                            containerElement={<Link to="/"/>}
                            style={this.state.clickedItem === '主页' ? {borderLeft: '5px solid #448AFF'} : {}}
                            onTouchTap={() => this.handleClick('主页')}
                        />
                        <ListItem
                            primaryText="搜索"
                            leftIcon={<ActionSearch />}
                            style={this.state.clickedItem === '搜索' ? {borderLeft: '5px solid #448AFF'} : {}}
                            onTouchTap={() => this.handleClick('搜索')}
                        />
                        <Divider/>
                        <Subheader>发现</Subheader>
                        <ListItem
                            primaryText="正在热映"
                            style={this.state.clickedItem === '正在热映' ? {borderLeft: '5px solid #448AFF', textAlign: 'center'} : { textAlign: 'center'}}
                            onTouchTap={() => this.handleClick('正在热映')}
                        />
                        <ListItem
                            primaryText= '即将上映'
                            style={this.state.clickedItem === '即将上映' ? {borderLeft: '5px solid #448AFF', textAlign: 'center'} : { textAlign: 'center'}}
                            onTouchTap={() => this.handleClick('即将上映')}
                        />
                        <ListItem
                            primaryText="探索发现"
                            containerElement={<Link to="/explore"/>}
                            style={this.state.clickedItem === '探索发现' ? {borderLeft: '5px solid #448AFF', textAlign: 'center'} : { textAlign: 'center'}}
                            onTouchTap={() => this.handleClick('探索发现')}
                        />
                        <Subheader>收藏</Subheader>
                        <ListItem
                            primaryText="在看"
                            style={this.state.clickedItem === '在看' ? {borderLeft: '5px solid #448AFF', textAlign: 'center'} : { textAlign: 'center'}}
                            onTouchTap={() => this.handleClick('在看')}
                        />
                        <ListItem
                            primaryText="想看"
                            style={this.state.clickedItem === '想看' ? {borderLeft: '5px solid #448AFF', textAlign: 'center'} : { textAlign: 'center'}}
                            onTouchTap={() => this.handleClick('想看')}
                        />
                        <ListItem
                            primaryText="看过"
                            style={this.state.clickedItem === '看过' ? {borderLeft: '5px solid #448AFF', textAlign: 'center'} : { textAlign: 'center'}}
                            onTouchTap={() => this.handleClick('看过')}
                        />
                    </List>
                </Paper>
            </div>
        )
    }
}