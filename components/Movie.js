/**
 * Created by Maple on 17/3/29.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
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

    render() {
        const {
            movie
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
                        <div className={style.buttonGroup}>
                            {buttonData.map((data, index) => {
                                return (
                                    <RaisedButton
                                        key={index}
                                        label={data}
                                        style={inlineStyle.button}
                                    />
                                )
                            })}
                        </div>

                        <Rating
                            value={3}
                            max={5}
                            onChange={(value) => console.log(`Rated with value ${value}`)}
                        />
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