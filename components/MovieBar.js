/**
 * Created by Maple on 17/3/30.
 */
import React from 'react';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import { browserHistory } from 'react-router'
import style from './MovieBar.css';

export default class MovieBar extends React.Component {

    handleTouchTap = () => {
        browserHistory.goBack();
    };

    render() {

        const {
            title,
            year,
            rating,
            rating_count
        } = this.props;

        return (
            <div className={style.root}>
                <IconButton
                    tooltip='点击后退'
                    onTouchTap={this.handleTouchTap}
                >
                    <NavigationArrowBack/>
                </IconButton>
                <div className={style.title}>
                    {`${title}(${year})`}
                </div>
            </div>
        )
    }
}