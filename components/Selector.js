/**
 * Created by Maple on 17/3/17.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import style from './Selector.css';


//TODO 自定义标签
const menuDataKey = ['分类', '国家'];

const menuData = {
    '分类': ['全部', '电影', '剧集'],
    '国家': ['全部', '中国', '日本', '韩国', '美国', '英国', '其他']
};

export default class Selector extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            openMenuTitle: '',
        }
    }

    handleTouchTap = (event, title) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            openMenuTitle: title,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            openMenuTitle: '',
        });
    };

    handleItemTouchTap = (event, menuItem, index, title) => {
        this.handleRequestClose();
        const {selectSuggestQuery, fetchMovieData} = this.props;
        selectSuggestQuery(title, menuData[title][index]);
        fetchMovieData();
    };

    render() {

        const {selectedSuggestQuery} = this.props;

        return (
            <Paper
                className={style.paper}
                zDepth={2}
            >

                {menuDataKey.map((title) => {
                    return (
                        <div
                            key={title}
                            className={style.menuBox}
                        >
                            <p className={style.text}>
                                {title}
                            </p>
                            <FlatButton
                                style={{
                                    padding: '0 0 5px 0',
                                    borderBottom: '1px solid #D2D2D2',
                                    minWidth: '0',
                                    width: 'auto'
                                }}
                                labelStyle={{color: '#212121', padding: '0 4px 0 0'}}
                                onTouchTap={(event) => this.handleTouchTap(event, title)}
                                label={selectedSuggestQuery.get(title)}
                                labelPosition="before"
                                icon={<ExpandMore style={{margin: 0}}/>}
                            />
                            <Popover
                                open={title === this.state.openMenuTitle}
                                anchorEl={this.state.anchorEl}
                                anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                onRequestClose={this.handleRequestClose}
                            >
                                <Menu
                                    value={selectedSuggestQuery.get(title)}
                                    onItemTouchTap={(event, menuItem, index) => this.handleItemTouchTap(event, menuItem, index, title)}
                                >
                                    {menuData[title].map((v, index) => (
                                        <MenuItem
                                            style={{fontSize: '14px'}}
                                            key={index}
                                            value={v}
                                            primaryText={v}
                                        />
                                    ))}
                                </Menu>
                            </Popover>
                        </div>
                    )
                })}
            </Paper>
        )
    }
}