/**
 * Created by Maple on 17/4/5.
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import NavigateBefore from 'material-ui/svg-icons/image/navigate-before';
import NavigateNext from 'material-ui/svg-icons/image/navigate-next';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import store from '../redux/store/index';
import { fetchMovieData } from '../redux/actions/SelectorActions';
import style from './Pagination.css';

export default class Pagination extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            inputPage: 1
        }
    }

    handleTouchTap = (event) => {
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget
        })
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    handleItemTouchTap = (event, menuItem, index) => {
        this.setState({
            open: false
        });
        store.dispatch(fetchMovieData(index));
    };

    handleClickPrevButton = (pageIndex) => {
        store.dispatch(fetchMovieData(pageIndex-1));
    };

    handleClickNextButton = (pageIndex) => {
        store.dispatch(fetchMovieData(pageIndex+1));
    };

    render() {
        const {
            count,
            pageIndex,
            pageSize
        } = this.props;

        const pageCount = Math.ceil(count / pageSize) > 100 ? 100 : Math.ceil(count / pageSize);

        switch (pageCount) {
            case 0:
            case 1:
                return (
                    <div>

                    </div>
                );
                break;
            default:
                return (
                    <div className={style.root}>
                        <RaisedButton
                            label='上一页'
                            icon={<NavigateBefore/>}
                            disabled={pageIndex === 0}
                            onTouchTap={() => this.handleClickPrevButton(pageIndex)}
                        />
                        <RaisedButton
                            onTouchTap={(event) => this.handleTouchTap(event)}
                            label={`第${pageIndex+1}页`}
                            labelStyle={{fontSize: '16px'}}
                            labelPosition="before"
                            icon={<ExpandMore style={{margin: 0}}/>}
                        />
                        <Popover
                            open={this.state.open}
                            anchorEl={this.state.anchorEl}
                            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                            targetOrigin={{horizontal: 'left', vertical: 'top'}}
                            onRequestClose={this.handleRequestClose}
                        >
                            <Menu
                                maxHeight={272}
                                onItemTouchTap={this.handleItemTouchTap}
                            >
                                {new Array(pageCount).fill(1).map((v, index) => (
                                    <MenuItem
                                        key={index}
                                        value={index}
                                        primaryText={`第${index+1}页`}
                                    />
                                ))}
                            </Menu>
                        </Popover>

                        <RaisedButton
                            label='下一页'
                            labelPosition='before'
                            icon={<NavigateNext/>}
                            disabled={pageIndex + 1 === pageCount}
                            onTouchTap={() => this.handleClickNextButton(pageIndex)}
                        />
                        <span>
                            {`共${pageCount}页`}
                        </span>
                    </div>
                )
        }
    }
}