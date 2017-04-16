/**
 * Created by Maple on 17/3/29.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import Rating from './Rating';

import style from './Movie.css';

const inlineStyle = {
    paper: {
        padding: '20px',
        margin: '20px 80px',
        zDepth: 2,
    },
    button: {
        border: '1px solid #DFDFDF'
    }
};

const buttonData = ['想看', '看过', '在看'];


export default class Movie extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            openSnackbar: false
        }
    }

    componentDidMount() {
        const {
            movie,
            getMyMovieData
        } = this.props;
        getMyMovieData(movie.get('id'));
    }

    handleOpenSnackbar = () => {
      this.setState({
          openSnackbar: true
      })
    };

    handleCloseSnackbar = () => {
      this.setState({
          openSnackbar: false
      })
    };

    render() {
        const {
            movie,
            myMovieData
        } =this.props;

        return (
            <Paper style={inlineStyle.paper}>
                <div className={style.movieData}>
                    <div className={style.leftContent}>
                        <img
                            className={style.img}
                            src={`http://localhost:3000/img/${movie.get('id')}.jpg`}
                            alt={`${movie.get('id')}.jpg`}
                        />
                        {myMovieData.get('items').size === 1 && (
                            <div>
                                <div className={style.buttonGroup}>
                                    {buttonData.map((data, index) => {
                                        return (
                                            <div key={index}>
                                                <RaisedButton
                                                    label={data}
                                                    style={inlineStyle.button}
                                                    onTouchTap={this.handleOpenSnackbar}
                                                />
                                                <Snackbar
                                                    open={this.state.openSnackbar}
                                                    message="您已经改变了观影状态"
                                                    autoHideDuration={4000}
                                                    onRequestClose={this.handleCloseSnackbar}
                                                />
                                            </div>
                                        )
                                    })}
                                </div>
                                <Rating
                                    onChange={(value) => console.log(`Rated with value ${value}`)}
                                />
                            </div>
                        )}
                    </div>
                    <div className={style.information}>

                    </div>
                </div>

                <div className={style.summary}>

                </div>

                <div className={style.comments}>

                </div>
            </Paper>
        )
    }
}