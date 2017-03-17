/**
 * Created by Maple on 17/3/17.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';

const style = {
    mainDiv: {
        height: '100px',
        width: '100%',
    },
    paper: {
        height: '100px',
        width: '100%',
    },
    categoryDiv: {
        display: '-webkit-flex',
        flexFlow: 'row wrap',
        justifyContent: 'flex-start'
    }
};

export default class Selector extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            buttonBackgroudColor: 'rgb(255, 255, 255)',

            categoryData: {

            }
        };

    }

    handleTouchTap = () => {
        this.setState(
            {
                buttonBackgroudColor: 'rgb(211, 211, 211)',
            }
        )
    };

    renderFlatButton = (data) => {
        return (
            <FlatButton
                label={data}
                backgroundColor={this.state.buttonBackgroudColor}
                onTouchTap={this.handleTouchTap}
            >
            </FlatButton>
        )
    };

    renderChip = (data) => {
      return (
          <Chip
              key={data.key}
          >
              {data.tag}
          </Chip>
      )
    };

    render() {
        return (
            <div style={style.mainDiv}>
                <Paper style={style.paper}>
                    <div style={style.categoryDiv}>
                        {this.state.categoryData.map(this.renderFlatButton)}
                    </div>
                </Paper>
            </div>
        )
    }
}