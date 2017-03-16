/**
 * Created by Maple on 17/3/7.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List/';
import Subheader from 'material-ui/Subheader';
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
    }
};

export default class Sidebar extends React.Component {

    render() {
        return (
            <div style={style.sidebarDiv}>
                <Paper style={style.paper}>
                    <List>
                        <Subheader>发现</Subheader>
                        <ListItem
                            primaryText="电影"
                            initiallyOpen={true}
                            primaryTogglesNestedList={true}
                            containerElement={<Link to="/"/>}
                            nestedItems={[
                                <ListItem
                                    key={1}
                                    primaryText="正在热映"
                                />,
                                <ListItem
                                    key={2}
                                    primaryText="即将上映"
                                />,
                                <ListItem
                                    key={3}
                                    primaryText="选电影"
                                    containerElement={<Link to="explore"/>}
                                />
                            ]}
                        >
                        </ListItem>
                        <ListItem
                            primaryText="电视剧"
                            initiallyOpen={false}
                            primaryTogglesNestedList={true}
                            nestedItems={[
                                <ListItem
                                    key={1}
                                    primaryText="热门"
                                />,
                                <ListItem
                                    key={2}
                                    primaryText="选电视剧"
                                />
                            ]}
                        >
                        </ListItem>
                        <Subheader>收藏</Subheader>
                        <ListItem
                            primaryText="我的电影"
                            initiallyOpen={true}
                            primaryTogglesNestedList={true}
                            nestedItems={[
                                <ListItem
                                    key={1}
                                    primaryText="在看"
                                />,
                                <ListItem
                                    key={2}
                                    primaryText="想看"
                                />,
                                <ListItem
                                    key={3}
                                    primaryText="看过"
                                />
                            ]}
                        >
                        </ListItem>
                    </List>
                </Paper>
            </div>
        )
    }
}