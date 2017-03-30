/**
 * Created by Maple on 17/3/29.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RadioButton';
import style from './Movie.css';

const inlineStyle = {
    paper: {
        padding: '20px',
        margin: '20px 80px',
        zDepth: 2,
    }
};

export default class Movie extends React.Component {

    render() {
        const {
            movie
        } =this.props;

        return (
            <Paper style={inlineStyle.paper}>

                <div className={style.movieData}>
                    <div className={style.img}>
                        <img
                            src={`http://localhost:3000/img/${movie.get('id')}.jpg`}
                            alt={`${movie.get('id')}.jpg`}
                        />
                    </div>
                    <div className={style.information}>
                        <div className={style.buttonGroup}>
                            <RaisedButton
                                label='想看'
                            />
                        </div>
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