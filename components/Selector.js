/**
 * Created by Maple on 17/3/17.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import styles from './Selector.css';


//TODO 自定义标签
const dropDownMenuData = {
    type: ['全部', '电影', '电视剧'],
    country: ['全部', '中国', '日本', '韩国']
};

const style = {
    mainDiv: {
        width: '100%'
    },
    paper: {
        width: '100%',
    },
    selectorLineDiv: {
        width: '100%',
        padding: '7px 0',

        display: '-webkit-flex',
        flexFlow: 'row wrap',
        justifyContent: 'flex-start'
    }
};

export default class Selector extends React.Component {


    handleTypeChange = (event, index) => {
        const {selectDefaultQuery, fetchMovieData} = this.props;
        selectDefaultQuery('type', dropDownMenuData.type[index]);
        fetchMovieData();
    };

    handleCountryChange = (event, index) => {
        const {selectDefaultQuery, fetchMovieData} = this.props;
        selectDefaultQuery('country', dropDownMenuData.country[index]);
        fetchMovieData();
    };

    render() {

        const { $selectedDefaultQuery } = this.props;

        return (
            <div style={style.mainDiv}>
                <Paper
                    style={style.paper}
                    zDepth={2}
                >
                    <div style={style.selectorLineDiv}>
                        <DropDownMenu
                            value={dropDownMenuData.type.indexOf($selectedDefaultQuery.get('type'))}
                            onChange={this.handleTypeChange}
                        >
                            {dropDownMenuData.type.map((v, index) => (
                                <MenuItem
                                    key={index}
                                    value={index}
                                    primaryText={v}
                                />
                            ))}
                        </DropDownMenu>
                        <DropDownMenu
                            value={dropDownMenuData.country.indexOf($selectedDefaultQuery.get('country'))}
                            onChange={this.handleCountryChange}
                        >
                            {dropDownMenuData.country.map((v, index) => (
                                <MenuItem
                                    key={index}
                                    value={index}
                                    primaryText={v}
                                />
                            ))}
                        </DropDownMenu>
                    </div>
                    <div style={style.selectorLineDiv}>

                    </div>
                </Paper>
            </div>
        )
    }
}