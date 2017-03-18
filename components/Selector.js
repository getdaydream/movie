/**
 * Created by Maple on 17/3/17.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';

const defaultFlatButtonBackgroundColor = 'rgb(255, 255, 255)';
const primaryFlatButtonBackgroundColor = 'rgb(200, 200, 200)';

const categoryData = ['全部', '电影', '电视剧', '动画', '综艺'];
const countryData = ['全部', '美国', '英国', '日本', '韩国','中国'];

const style = {
    mainDiv: {
        width: '100%',
    },
    paper: {
        width: '100%',
    },
    selectorLineDiv: {
        display: '-webkit-flex',
        flexFlow: 'row wrap',
        justifyContent: 'flex-start'
    }
};

export default class Selector extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            categorySelectedTagIndex: 0,
            countrySelectedTagIndex: 0
        }

    };

    //TODO !!!!!!!!怎样在onclick中传参
    handleCategoryTouchTap = (index) => {
        this.setState({
            categorySelectedTagIndex: index
        });
    };

    handleCountryTouchTap = (index) => {
        this.setState({
            countrySelectedTagIndex: index
        });
    };


    render() {
        return (
            <div style={style.mainDiv}>
                <Paper style={style.paper}>
                    <div style={style.selectorLineDiv}>
                        {categoryData.map((data, index) => (
                            <FlatButton
                                key={index}
                                label={data}
                                backgroundColor={this.state.categorySelectedTagIndex == index ? primaryFlatButtonBackgroundColor : defaultFlatButtonBackgroundColor}
                                onTouchTap={() => this.handleCategoryTouchTap(index)}
                            />
                            )
                        )}
                    </div>
                    <div style={style.selectorLineDiv}>
                        {countryData.map((data, index) => (
                                <FlatButton
                                    key={index}
                                    label={data}
                                    backgroundColor={this.state.countrySelectedTagIndex == index ? primaryFlatButtonBackgroundColor : defaultFlatButtonBackgroundColor}
                                    onTouchTap={() => this.handleCountryTouchTap(index)}
                                />
                            )
                        )}
                    </div>
                </Paper>
            </div>
        )
    }
}